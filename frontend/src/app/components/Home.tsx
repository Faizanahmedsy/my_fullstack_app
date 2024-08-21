"use client";

import { useEffect, useState } from "react";

type Props = {};

export default function Home({}: Props) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>Hello World</h1>
          <p>{data?.message}</p>
        </div>
      )}
    </div>
  );
}
