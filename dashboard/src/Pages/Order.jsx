import React, { useState, useEffect } from "react";
import {
  Space,
  Table,
  Button,
  message,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import axios from "../Components/Axios";

const Order = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [form] = Form.useForm();

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/order/getOrder");
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleEdit = (record) => {
    console.log(record);
    setCurrentOrder(record);
    form.setFieldsValue({
      name: record.name,
      phoneNumber: record.phoneNumber,
      email: record.email,
      streetAddress: record.streetAddress,
      status: record.status,
      // You can add other fields here as needed
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/order/deleteOrder/${id}`);
      message.success("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      message.error("Failed to delete order");
      console.error("Error deleting order:", error);
    }
  };

  const handleUpdate = async (values) => {
    try {
      await axios.put(`/order/editOrder/${currentOrder?._id}`, {
        ...currentOrder, // spread existing order details to preserve unchanged fields
        ...values, // override with updated values from the form
      });

      message.success("Order updated successfully");
      setIsModalVisible(false);
      fetchOrders();
    } catch (error) {
      message.error("Failed to update order");
      console.error("Error updating order:", error);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`/order/editOrder/${orderId}`, { status: newStatus });
      message.success("Order status updated successfully");
      fetchOrders();
    } catch (error) {
      message.error("Failed to update order status");
      console.error("Error updating order status:", error);
    }
  };

  const handlePrintInvoice = async (order) => {
    try {
      const response = await axios.get(`/order/${order._id}`);
      const anOrder = response?.data?.data?.doc;

      const invoiceWindow = window.open("", "_blank");

      const invoiceHTML = `
        <html>
          <head>
            <title>Invoice</title>
            <style>
              body { font-family: Arial, sans-serif; }
              .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); }
              .invoice-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
              .invoice-header h1 { margin: 0; }
              .invoice-details { margin-bottom: 20px; }
              .invoice-details p { margin: 0; }
              .invoice-products { width: 100%; border-collapse: collapse; }
              .invoice-products th, .invoice-products td { border: 1px solid #eee; padding: 10px; }
              .invoice-total { margin-top: 20px; text-align: right; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="invoice-box">
              <div class="invoice-header">
                <h1>Invoice</h1>
                <div>
                  <p>Order ID: ${anOrder._id}</p>
                  <p>Date: ${new Date(
                    anOrder.createdAt
                  ).toLocaleDateString()}</p>
                </div>
              </div>
              <div class="invoice-details">
                <p>Name: ${anOrder.name}</p>
                <p>Phone: ${anOrder.phone}</p>
                <p>Email: ${anOrder.email}</p>
                
                <p>Address:${anOrder.streetAddress}, ${
        anOrder.area.areaName
      }, ${anOrder?.city?.cityName}, ${anOrder?.zone?.zoneName} </p>
              </div>
              <table class="invoice-products">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${anOrder.products
                    .map(
                      (product) => `
                      <tr>
                        <td>${product?.option?.product?.name || "N/A"}</td>
                        <td>${product?.option?.variant?.colorName || "N/A"}</td>
                        <td>${product?.option?.size || "N/A"}</td>
                        <td>${product?.quantity || "N/A"}</td>
                        <td>${anOrder.totalCost || "N/A"}</td>
                      </tr>
                    `
                    )
                    .join("")}
                </tbody>
              </table>
              <div class="invoice-total">
                <p>Total Cost: ${anOrder.totalCost}</p>
              </div>
            </div>
          </body>
        </html>
      `;

      invoiceWindow.document.write(invoiceHTML);
      invoiceWindow.document.close();

      invoiceWindow.onload = () => {
        invoiceWindow.print();
        invoiceWindow.close();
      };
    } catch (error) {
      console.error("Error printing invoice:", error);
    }
  };

  const columns = [
    {
      title: "SR",
      dataIndex: "index",
      key: "sr",
      render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Product Name",
      dataIndex: ["product", "title"],
      key: "productName",
      render: (text) => <a>{text || "N/A"}</a>,
    },
    {
      title: "Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    // {
    //   title: "Color Name",
    //   dataIndex: ["product", "color"],
    //   key: "colorName",
    //   render: (text) => <a>{text || "N/A"}</a>,
    // },
    {
      title: "Size",
      dataIndex: ["product", "size"],
      key: "size",
    },
    {
      title: "streetAddress",
      dataIndex: "streetAddress",
      key: "streetAddress",
      render: (text, record) => (
        <div>
          <p>Name: {record.name}</p>
          <p>Phone: {record.phoneNumber}</p>
          <p>Email: {record.email}</p>
          <p>
            Address:
            {`${record?.streetAddress}`}
          </p>
        </div>
      ),
    },
    {
      width: "10%",
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Select
          className="w-[100%]"
          value={record.status} // Show current status
          onChange={(value) => handleStatusChange(record._id, value)}
          options={[
            { label: "Pending", value: "pending" },
            { label: "Approved", value: "approved" },
            { label: "Delivered", value: "delivered" },
            { label: "Shipped", value: "shipped" },
            { label: "Canceled", value: "canceled" },
          ]}
        />
      ),
    },

    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="primary" onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
          <Button type="primary" onClick={() => handlePrintInvoice(record)}>
            Print Invoice
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record._id}
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title="Edit Order"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdate}
          initialValues={currentOrder}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phoneNumber">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="streetAddress">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Order;
