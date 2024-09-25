import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Invoice = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="p-8 bg-white max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Invoice #123456</h1>

      {/* Invoice Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Billing Information</h2>
        <p>John Doe</p>
        <p>1234 Example Street</p>
        <p>City, State, ZIP</p>
        <p>Email: johndoe@example.com</p>
      </div>

      {/* Product Details */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Product 1</td>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">$130.00</td>
            <td className="py-2 px-4 border-b">$130.00</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Product 2</td>
            <td className="py-2 px-4 border-b">1</td>
            <td className="py-2 px-4 border-b">$90.00</td>
            <td className="py-2 px-4 border-b">$90.00</td>
          </tr>
        </tbody>
      </table>

      {/* Summary */}
      <div className="mt-6 text-right">
        <p className="font-semibold">Subtotal: $220.00</p>
        <p className="font-semibold">Tax (5%): $11.00</p>
        <p className="font-bold text-lg">Total: $231.00</p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">Thank you for your purchase!</p>
      </div>
    </div>
  );
});

export default Invoice;
