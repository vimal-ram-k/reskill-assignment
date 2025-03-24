import { useState } from "react";

export const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  return (
    <div className="payment-container">
      <h1>Payment Methods</h1>
      <div className="methods">
        <section>
          <input
            type="radio"
            name="payment"
            id="cod"
            value="COD"
            checked={selectedMethod === "COD"}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </section>

        <section>
          <input
            type="radio"
            name="payment"
            id="gpay"
            value="Gpay"
            checked={selectedMethod === "Gpay"}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label htmlFor="gpay">Gpay</label>
        </section>

        <section>
          <input
            type="radio"
            name="payment"
            id="paylater"
            value="ShopCart Pay"
            checked={selectedMethod === "ShopCart Pay"}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label htmlFor="paylater">ShopCart Pay</label>
        </section>
      </div>
    </div>
  );
};