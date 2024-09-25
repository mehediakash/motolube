const orderModel = require("../model/orderModel");
const ejs = require("ejs");
const path = require("path");
const sendEmail = require("../utils/sendEmail");

async function createOrder(req, res) {
  try {
    const {
      product,
      phoneNumber,
      quantity,
      totalPrice,
      streetAddress,
      email,
      name,
    } = req.body;
    const newOrder = new orderModel({
      product,
      quantity,
      phoneNumber,
      totalPrice,
      streetAddress,
      email,
      name,
    });
    await newOrder.save();
    const invoiceTemplatePath = path.join(
      __dirname,
      "../views/invoiceTemplate.ejs"
    );
    const invoiceHtml = await ejs.renderFile(invoiceTemplatePath, {
      order: newOrder,
      email,
    });

    await sendEmail(email, "Your Order Invoice", invoiceHtml);
    await sendEmail("dev.mhakash@gmail.com", "New Order Invoice", invoiceHtml);

    res
      .status(201)
      .json({
        success: true,
        message: "Order placed successfully",
        data: newOrder,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

async function getAllOrder(req, res) {
  try {
    const orders = await orderModel.find().populate("product");
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

async function getBrandById(req, res) {
  try {
    const { id } = req.params;
    const order = await orderModel.findById(id).populate("product");

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve order",
        error: error.message,
      });
  }
}

async function editOrder(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const { name, streetAddress, quantity, totalPrice, status } = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      {
        name,
        totalPrice,
        streetAddress,
        quantity,
        status,
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (status) {
      const statusUpdateTemplatePath = path.join(
        __dirname,
        "../views/statusUpdateTemplate.ejs"
      );
      const statusUpdateHtml = await ejs.renderFile(statusUpdateTemplatePath, {
        order: updatedOrder,
        status,
      });
      await sendEmail(
        updatedOrder.email,
        "Your Order Status Update",
        statusUpdateHtml
      );
    }
    res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update order", error: error.message });
  }
}

async function deleteOrder(req, res) {
  try {
    const { id } = req.params;
    const deletedOrder = await orderModel.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete order", error: error.message });
  }
}

module.exports = {
  createOrder,
  getAllOrder,
  editOrder,
  deleteOrder,
  getBrandById,
};
