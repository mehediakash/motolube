import React, { useState } from "react";
import { Slider, Checkbox, Pagination, Dropdown, Menu } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import ProductCard from "../Components/ProductCard";
import product from "../assets/Product/1-29-600x600.jpg";
import { RiListSettingsLine } from "react-icons/ri";

const ShopPage = () => {
  const [view, setView] = useState("grid"); // State to toggle between grid and list view
  const [sortOption, setSortOption] = useState("default"); // State for sorting
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const categories = ["Accessories", "Brakes", "Tires & Wheels", "Headlights"];
  const brands = ["Honda", "Hyundai", "Jaguar", "Lexus", "Toyota"];
  const sizes = ["16 inch", "17 inch", "18 inch", "19 inch", "20 inch"];
  const ratings = [5, 4, 3, 2, 1];

  // Sorting options dropdown
  const sortMenu = (
    <Menu onClick={(e) => setSortOption(e.key)}>
      <Menu.Item key="default">Default Sorting</Menu.Item>
      <Menu.Item key="price-asc">Price: Low to High</Menu.Item>
      <Menu.Item key="price-desc">Price: High to Low</Menu.Item>
      <Menu.Item key="popularity">Popularity</Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-root">
      <div className="container mx-auto py-8 px-4 flex mt-20 flex-col md:flex-row relative">
        {/* Mobile Filter Button */}

        {/* Filter Sidebar with animation on mobile, static on desktop */}
        <div
          className={`w-64 bg-white p-4 rounded-lg shadow-md  md:relative md:translate-x-0 md:block fixed top-0 left-0 h-full md:z-[2] z-[999] transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 flex justify-between items-center">
            Filter By
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-red-500 md:hidden"
            >
              Close
            </button>
          </h3>

          {/* Categories */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-black">Categories</h4>
            {categories.map((category, index) => (
              <div key={index}>
                <Checkbox>{category}</Checkbox>
              </div>
            ))}
          </div>

          {/* Price Range Slider */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-black">Price</h4>
            <Slider range defaultValue={[20, 220]} min={0} max={500} />
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-black">Brands</h4>
            {brands.map((brand, index) => (
              <div key={index}>
                <Checkbox>{brand}</Checkbox>
              </div>
            ))}
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-black">Size</h4>
            {sizes.map((size, index) => (
              <div key={index}>
                <Checkbox>{size}</Checkbox>
              </div>
            ))}
          </div>

          {/* Ratings */}
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <div className="md:w-3/4 w-full md:p-4 p-0">
          <div className="flex justify-between items-center mb-6">
            <div
              className="my-5 flex items-center gap-x-2 md:hidden cursor-pointer text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <RiListSettingsLine size={25} className="" />
              <h1 className="text-xl "> Filter By</h1>
            </div>
            <Dropdown overlay={sortMenu}>
              <button className="px-4 py-2 text-black bg-gray-200 rounded-md">
                Sort by: {sortOption} ▼
              </button>
            </Dropdown>

            <div className="flex space-x-4">
              <button onClick={() => setView("grid")}>
                <AppstoreOutlined
                  className={`text-2xl ${
                    view === "grid" ? "text-blue-500" : "text-white"
                  }`}
                />
              </button>
              <button onClick={() => setView("list")}>
                <BarsOutlined
                  className={`text-2xl ${
                    view === "list" ? "text-blue-500" : "text-white"
                  }`}
                />
              </button>
            </div>
          </div>

          <div
            className={
              view === "grid"
                ? "grid md:grid-cols-4 grid-cols-2 gap-x-5"
                : "space-y-6"
            }
          >
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product}
              price={"10"}
            />
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product}
              price={"10"}
            />
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product}
              price={"10"}
            />
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product}
              price={"10"}
            />
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product}
              price={"10"}
            />
            <ProductCard
              title={"Car Audio Systems"}
              discription={
                "Dorman Steel Wheel Compatible with Select Honda Models"
              }
              img={product}
              price={"10"}
            />
          </div>

          <div className="mt-8">
            <Pagination defaultCurrent={1} total={50} pageSize={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
