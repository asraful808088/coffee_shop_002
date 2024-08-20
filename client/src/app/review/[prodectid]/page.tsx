"use client";
import getProdect from "@/app/network/getProdect/getProdect";
import ProdectReview from "@/app/view/prodectView/prodectreview";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function ReviewPage() {
  const { prodectid } = useParams();
  const [data, setData] = useState({ prodects: null, prodect: null });
  useEffect(() => {
    getProdect({
      prodectId: prodectid,
      callback: (value) => {
        if (value.data) {
          setData(value.data);
          console.log(value.data)
        }
      },
    });
  }, [prodectid]);
  return data.prodect && data.prodects ? <ProdectReview prodectDetails={data.prodect} prodectItems={data.prodects}/> : null;
}
