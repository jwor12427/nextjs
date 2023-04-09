/** @format */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function GoProductsButton() {
	//경로 이동 할수 있음
	const router = useRouter();
	return (
		<button
			onClick={() => {
				router.push("/products");
			}}
		>
			제품 페이지로 이동
		</button>
	);
}
