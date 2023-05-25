import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../../../Context/Firebase";
import "./Billing.css";
const Billing = () => {
  const firebase = useFirebase();

  const [productid, setproductid] = useState("");
  const [storeName, setStoreName] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const billing = () => {
    if (
      productid == "" ||
      storeName == "" ||
      location == "" ||
      amount == "" ||
      date == ""
    ) {
      alert("please fill all the details");
    }
    firebase.Billing(productid, storeName, location, amount, date);
    firebase.Billing2(productid, storeName, location, amount, date).then(() => {
      setAmount("");
      setproductid("");
      setDate("");
      setLocation("");
      setStoreName("");
    });
  };

  return (
    <div className="Head_Container_bill">
      <div className="header_container">
        <div className="Adleno_admin_header">
          <Link to="/Billing">
            <h3>
              Aldeno <span>admin</span>
            </h3>
          </Link>
        </div>
        <div className="list">
          <div>
            <Link to="/addproduct">Add Product</Link>
          </div>
          <div>
            <Link to="/qrcode">Link With QR</Link>
          </div>
          <div>
            <Link to="/resellproduct">Resell Request</Link>
          </div>
          <div>
            <Link to="/Billing">Billing</Link>
          </div>
          <div>
            <Link to="/productpage">Find Product</Link>
          </div>
        </div>
      </div>

      <div className="sub_conatainer_bill">
        <div className="heading_bill">
          <p>Bill Portal</p>
        </div>
        <div className="input_label_bill">
          <p>product ID</p>
        </div>
        <div className="input_bill">
          <input
            type="text"
            value={productid}
            onChange={(e) => setproductid(e.target.value)}
            className="border"
          />
        </div>

        <div className="input_label_bill">
          <p>Store Name</p>
        </div>
        <div className="input_bill">
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="border"
          />
        </div>

        <div className="input_label_bill">
          <p>Location</p>
        </div>
        <div className="input_bill">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border"
          />
        </div>

        <div className="input_label_bill">
          <p>Amount</p>
        </div>
        <div className="input_bill">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border"
          />
        </div>

        <div className="input_label_bill">
          <p>Date of purchase</p>
        </div>
        <div className="input_bill">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3"
          />
        </div>
        <div className="bill_btn">
          <button onClick={billing}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
