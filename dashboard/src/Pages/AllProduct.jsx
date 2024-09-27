import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Tag, Upload, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../Components/Axios";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/product/allproduct");
      setProducts(data.data);
    } catch (error) {
      message.error("Failed to fetch products");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    form.setFieldsValue({
      ...product,
      details: product.details.replace(/<\/?[^>]+(>|$)/g, ""), // Clean HTML tags
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/product/deleteProduct/${id}`);
      message.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      message.error("Failed to delete product");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    form.resetFields();
  };

  const handleFinish = async (values) => {
    try {
      // Prepare data to send to the backend
      const updatedProduct = {
        ...editingProduct,
        ...values,
        category: editingProduct.category._id || editingProduct.category,
        subCategory:
          editingProduct.subCategory._id || editingProduct.subCategory,
      };

      const formData = new FormData();
      for (let key in updatedProduct) {
        formData.append(key, updatedProduct[key]);
      }

      // Append new photos if any
      const files = editingProduct.newPhotos || [];
      files.forEach((file) => {
        formData.append("photos", file);
      });

      await axios.put(`/product/editProduct/${editingProduct._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      message.success("Product updated successfully");
      fetchProducts();
      handleModalClose();
    } catch (error) {
      message.error("Failed to update product");
      console.error(error);
    }
  };

  const handlePhotoUpload = ({ file }) => {
    // Update the editingProduct state with the new photo
    setEditingProduct((prev) => ({
      ...prev,
      newPhotos: [...(prev.newPhotos || []), file], // Keep track of new photos
    }));
  };

  const handlePhotoRemove = (index) => {
    const updatedPhotos = [...editingProduct.newPhotos];
    updatedPhotos.splice(index, 1); // Remove the photo from newPhotos
    setEditingProduct({
      ...editingProduct,
      newPhotos: updatedPhotos,
    });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photos) => (
        <>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={`http://localhost:8000/${photo}`}
              alt="Product"
              className="w-16 h-16 object-cover"
            />
          ))}
        </>
      ),
    },
    { title: "Title", dataIndex: "title" },
    { title: "Price", dataIndex: "price" },
    { title: "Discount Price", dataIndex: "discountPrice" },
    {
      title: "Color",
      dataIndex: "color",
      render: (colors) => colors.map((color) => <Tag key={color}>{color}</Tag>),
    },
    {
      title: "Size",
      dataIndex: "size",
      render: (sizes) => sizes.map((size) => <Tag key={size}>{size}</Tag>),
    },
    { title: "Category", dataIndex: ["category", "name"] },
    { title: "SubCategory", dataIndex: ["subCategory", "name"] },
    { title: "Brand", dataIndex: ["brand", "title"] },
    {
      title: "Actions",
      render: (product) => (
        <>
          <Button
            icon={<EditOutlined />}
            className="mr-2"
            onClick={() => handleEdit(product)}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(product._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={products} rowKey="_id" />

      <Modal
        title="Edit Product"
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="details" label="Details">
            <ReactQuill />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="discountPrice"
            label="Discount Price"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="discription" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="color" label="Color">
            <Input />
          </Form.Item>
          <Form.Item name="size" label="Size">
            <Input />
          </Form.Item>

          <div className="mb-4">
            <Upload
              listType="picture"
              beforeUpload={() => false}
              onChange={handlePhotoUpload}
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
            {editingProduct?.newPhotos?.map((file, index) => (
              <div key={index} className="relative mt-2">
                <img
                  src={URL.createObjectURL(file)} // Create a local URL for the uploaded image
                  alt="Product"
                  className="w-16 h-16"
                />
                <Button
                  danger
                  onClick={() => handlePhotoRemove(index)}
                  className="absolute top-0 right-0"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AllProduct;
