/** @format */

import GoProductsButton from "@/components/GoProductsButton";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import React from "react";

type Props = {
	params: {
		slug: string; //slug에 대한 타입을 지정, slug대신 다른것을 지정했으면 다른것으로 변경
	};
};

export const revalidate = 3;

//메타 데이터 생성 할 수 있음
export function generateMetadata({ params }: Props) {
	return {
		title: `제품의 이름: ${params.slug}`,
	};
}

const page = async ({ params: { slug } }: Props) => {
	// if (params.slug === "nothing") {
	//   notFound(); //slug가 nothing이라면 자동으로 호출
	// }
	//서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
	const product = await getProduct(slug);

	if (!product) {
		//동적으로 수행하는것 - 사용자가 존재하지 않는 아이디를 입력할 경우 바로 수행
		redirect("/products");
		notFound();
	}
	return (
		<>
			<h1>{product.name} 제품 설명 페이지!</h1>
			<Image
				src={`/images/${product.image}`}
				alt={product.name}
				width="300"
				height="300"
			/>
			<GoProductsButton />
		</>
	);
};

export default page;

//경로 선언하면 미리 페이지를 만들어서 사용할 수 있음
export async function generateStaticParams() {
	//모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것(SSG)
	const products = await getProducts();
	return products.map((product) => ({
		slug: product.id,
	}));
}
