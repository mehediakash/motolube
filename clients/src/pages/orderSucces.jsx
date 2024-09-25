import React, { useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import Invoice from "../Components/Invoice";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: "Invoice-123456", // Title for the PDF
  });

  return (
    <div className="bg-root">
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <FaRegCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase! Your order number is{" "}
            <span className="font-semibold">#123456</span>. You will receive an
            email confirmation shortly with your order details.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              className="w-full sm:w-auto px-4 py-2 bg-yellow-500 text-white rounded-md font-medium hover:bg-yellow-600 transition"
              onClick={handlePrint}
            >
              Download Invoice
            </button>
            <Link to="/shop">
              <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition">
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className="mt-12 border-t pt-6 text-left">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Product 1</span>
                <span>$130.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Product 2</span>
                <span>$90.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-gray-700">
                <span>Total</span>
                <span>$220.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Component (hidden, only used for printing) */}
        <div className="hidden">
          <Invoice ref={invoiceRef} />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
