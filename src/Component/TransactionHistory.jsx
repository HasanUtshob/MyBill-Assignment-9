import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const TransactionHistory = () => {
  const [SingleBill, setSingleBill] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(data, id);

  useEffect(() => {
    const foundBill = data.find((bills) => bills.id == id);
    setSingleBill(foundBill);
  }, [data, id]);
  console.log(SingleBill);
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Logo</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Organization</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center font-bold">
              <td className="flex justify-center">
                <img className="w-[48px]" src={SingleBill.icon} alt="" />
              </td>
              <td className="border">{SingleBill.bill_type}</td>
              <td className="border">{SingleBill.organization}</td>
              <td className="border">৳{SingleBill.amount}</td>
              <td className={`flex justify-center`}>
                <img
                  className="w-[48px]"
                  src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
