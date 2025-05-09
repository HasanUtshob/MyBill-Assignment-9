import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BillList from "./BillList";

const Paybill = () => {
  const data = useLoaderData();
  const [filter, setFilter] = useState("all");

  const billTypes = ["all", ...new Set(data.map((bill) => bill.bill_type))];

  const filteredBills =
    filter === "all" ? data : data.filter((bill) => bill.bill_type === filter);

  return (
    <div className="my-4">
      <h1 className="text-4xl text-center font-bold">Bills</h1>
      {/* Filter dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {billTypes.map((type) => (
            <option key={type} value={type}>
              {type === "all"
                ? "All Bills"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {filteredBills.map((BillData) => (
        <BillList key={BillData.id} BillData={BillData}></BillList>
      ))}
    </div>
  );
};

export default Paybill;
