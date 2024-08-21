"use client";

import { useEffect, useState } from "react";

type Props = {};

export default function Home({}: Props) {
  const [data, setData] = useState<any>(null);
  const [data2, setData2] = useState<any>(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/express", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/go", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData2(data));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>Express</h1>
          <p>{data?.message}</p>
        </div>
      )}
      {data2 && (
        <div>
          <h1>Fiber</h1>
          <p>{data2?.message}</p>
        </div>
      )}
    </div>
  );
}
