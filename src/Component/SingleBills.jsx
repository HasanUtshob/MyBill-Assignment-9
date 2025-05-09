import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import BillsCard from "./BillsCard";

const SingleBills = () => {
  const [SingleBill, setSingleBill] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(data, id);

  useEffect(() => {
    const foundBill = data.find((bills) => bills.id == id);
    setSingleBill(foundBill);
  }, [data, id]);

  return (
    <div className=" ">
      <BillsCard SingleBill={SingleBill}></BillsCard>
    </div>
  );
};

export default SingleBills;
