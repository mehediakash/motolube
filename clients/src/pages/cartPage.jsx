import React from "react";
import product1 from "../assets/Product/1-24.webp";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Aenean sed risus nec dolor volutpat",
      price: 130.0,
      quantity: 1,
      image: product1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      price: 90.0,
      quantity: 2,
      image: product1,
    },
  ];

  const handleRemoveItem = (id) => {
    // Logic to remove item from the cart
  };

  return (
    <div className="container mx-auto py-12 mt-20">
      <h1 className="text-3xl font-semibold mb-8 text-center text-white">
        Shopping Cart
      </h1>

      {/* Cart Content */}
      <div className="lg:flex gap-8">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow rounded-lg p-6">
            {cartItems.length > 0 ? (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-500">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center mt-2 space-x-4">
                          {/* Quantity Selector */}
                          <button
                            className="px-2 py-1 border bg-gray-100"
                            onClick={() => console.log("Decrease Quantity")}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="px-2 py-1 border bg-gray-100"
                            onClick={() => console.log("Increase Quantity")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-lg font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className="text-red-500 text-sm mt-2 hover:underline"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is currently empty.</p>
            )}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-semibold">$310.00</p>
              </div>

              {/* Shipping */}
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-semibold">Free</p>
              </div>

              {/* Taxes */}
              <div className="flex justify-between">
                <p className="text-gray-600">Estimated Tax</p>
                <p className="font-semibold">$20.00</p>
              </div>

              {/* Promo Code Input */}
              {/* <div className="mt-4">
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Promo Code"
                />
                <button className="mt-2 w-full py-2 bg-primary text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                  Apply
                </button>
              </div> */}

              {/* Total */}
              <div className="flex justify-between mt-6 border-t pt-4">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">$330.00</p>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <button className="w-full py-3 bg-black text-white font-semibold rounded-lg mt-6 hover:bg-gray-800 transition duration-300">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Recommended for You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            title={"Car Audio Systems"}
            discription={
              "Dorman Steel Wheel Compatible with Select Honda Models"
            }
            img={product1}
            price={"10"}
          />
          <ProductCard
            title={"Car Audio Systems"}
            discription={
              "Dorman Steel Wheel Compatible with Select Honda Models"
            }
            img={product1}
            price={"10"}
          />
          <ProductCard
            title={"Car Audio Systems"}
            discription={
              "Dorman Steel Wheel Compatible with Select Honda Models"
            }
            img={product1}
            price={"10"}
          />
          <ProductCard
            title={"Car Audio Systems"}
            discription={
              "Dorman Steel Wheel Compatible with Select Honda Models"
            }
            img={product1}
            price={"10"}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
