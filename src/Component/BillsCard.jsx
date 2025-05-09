import React, { use, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const BillsCard = ({ SingleBill }) => {
  const { id, icon, organization, amount, bill_type, due_date } = SingleBill;
  const { balance, setbalance } = use(AuthContext);
  const [bUpdate, setbUpdate] = useState(true);
  const [Clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleBill = () => {
    if (Clicked) {
      alert("Already Pay");
      return;
    } else {
      setbalance(balance - amount);
      setbUpdate(false);
      setClicked(true);
      setTimeout(() => {
        navigate(`/transactionhistory/${id}`);
      }, 1000);
    }
  };

  return (
    <div className="my-10 ">
      <div className="w-[600px] mx-auto  flex   items-center bg-base-100  rounded-lg shadow-sm ">
        <img className="w-[250px]" src={icon} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-1 text-4xl font-bold tracking-tight  ">
            {organization}
          </h5>
          <p className="mb-3 font-normal  ">
            {bill_type} <span>Bill</span>
          </p>
          <p className="font-bold">Amount : ৳ {bUpdate ? amount : "0"}</p>
          <p className="mb-2">Due Date : {due_date}</p>
          <button onClick={handleBill} className="btn btn-info">
            Pay Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillsCard;
