import React from "react";
import { useNavigate } from "react-router";

const BillList = ({ BillData }) => {
  const navigate = useNavigate();
  const { id, icon, organization, amount, bill_type, due_date } = BillData;
  const handleViewDetails = () => {
    navigate(`/singlebills/${id}`);
  };
  return (
    <div className="w-8/12 mx-auto">
      <div className="bg-base-100 my-2 p-4 rounded-md ">
        <div className="flex justify-between items-center  border-t-4 border-blue-400 ">
          <div className="flex gap-2 items-center ">
            <div>
              <img src={icon} alt="icon" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{bill_type}</h2>
              <p className="">{organization}</p>
              <p>{due_date}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-2xl font-bold text-center">৳ {amount}</p>
            <button onClick={handleViewDetails} className="btn btn-primary">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillList;
