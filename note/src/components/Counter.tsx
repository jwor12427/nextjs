"use client"; //client서버로 실행
import React, { useState } from "react";

export default function Counter() {
  console.log("클라이언트에서 실행");
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
