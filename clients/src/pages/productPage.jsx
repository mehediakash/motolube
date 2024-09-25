import React, { useState } from "react";
import { Rate, Button, InputNumber, Tabs } from "antd"; // Using Ant Design for UI components
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import product from "../assets/Product/1-24.webp";
import product1 from "../assets/Product/1-29-600x600.jpg";
import product2 from "../assets/Product/2-26-600x600.jpg";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;

const productPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-root">
      <div className="container mx-auto p-6 mt-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt;
          <a href="/category/automotive-rims" className="hover:underline">
            {" "}
            Automotive Rims{" "}
          </a>{" "}
          &gt;
          <span className="text-white"> Aenean sed risus nec dolor...</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div>
            <img
              src={product}
              alt="Main product"
              className="w-full h-auto mb-4"
            />
            <div className="flex space-x-4">
              <img
                src={product}
                alt="thumbnail"
                className="w-16 h-16 object-cover cursor-pointer"
              />
              <img
                src={product1}
                alt="thumbnail"
                className="w-16 h-16 object-cover cursor-pointer"
              />
              <img
                src={product}
                alt="thumbnail"
                className="w-16 h-16 object-cover cursor-pointer"
              />
              <img
                src={product}
                alt="thumbnail"
                className="w-16 h-16 object-cover cursor-pointer"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Aenean sed risus nec dolor volutpat hendrerit nec dolor
            </h1>

            <div className="flex items-center mt-2">
              <Rate disabled defaultValue={4} />
              <span className="ml-2 text-gray-500">(Customer Reviews)</span>
            </div>

            <div className="text-3xl font-semibold text-red-600 mt-4">
              $130.00{" "}
              <span className="text-gray-500 line-through">$138.00</span>
            </div>

            <p className="mt-4  text-white">
              Full of flavor but with palate cleansing acidity, our kiwifruit
              are rich in fiber and packed with the enzyme actinidin which are
              brilliant for digestion.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-6">
              <InputNumber
                min={1}
                max={10}
                value={quantity}
                onChange={setQuantity}
                className="mr-4"
              />
              <Button
                className="bg-primary text-white"
                icon={<ShoppingCartOutlined />}
              >
                Add to Cart
              </Button>
              <Link to={"/checkout"}>
                <Button
                  className="ml-4"
                  type="default"
                  icon={<HeartOutlined />}
                >
                  Buy it Now
                </Button>
              </Link>
            </div>

            {/* SKU, Category, Tags */}
            <div className="mt-6 text-sm text-white">
              <p>SKU: R100-Reserve-Logo-2</p>
              <p>Categories: Accessories, Automotive Rims, Detailing</p>
              <p>Tags: Hyundai, Kia, Lamborghini, Toyota, Triumph</p>
            </div>
          </div>
        </div>

        {/* Product Description & About */}
        <div className="mt-12 text-white">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Description" key="1">
              <p className="text-white mt-4">
                Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam
                vitae fermentum leo. Pellentesque bibendum dui eu mi tempor
                sodales. Integer gravida odio in sem laoreet tempus.
              </p>
            </TabPane>
            <TabPane className="!text-white" tab="About this item" key="2">
              <ul className="list-disc ml-6 mt-4 text-gray-600">
                <li>8 Spoke Design w/ Milled Aluminum Accents.</li>
                <li>Single Piece Aluminum Construction.</li>
                <li>RC Carbon Fiber Center Cap.</li>
                <li>Matte Black Coat w/ Machined Accents.</li>
                <li>
                  Backed by Rough Country Limited Lifetime Replacement Warranty.
                </li>
              </ul>
            </TabPane>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl text-white font-bold mb-4">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Example of a related product card */}
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product2}
              price={"10"}
            />
            {/* Repeat similar product cards for all related products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPage;
