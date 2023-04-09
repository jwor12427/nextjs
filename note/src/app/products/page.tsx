/** @format */

import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

type Props = {};

//데이터 배열을 만들고 하는 것이 더 효율적
//const products = ["shirt", "pants", "skirt", "shoes"];

//ISR작동 방법
//export const revalidate = 3;

const page = async (props: Props) => {
	//throw new Error(); 에러 발생
	//서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
	const products = await getProducts();

	//fetch 사용방법
	//const res = await fetch("https://meowfacts.herokuapp.com", {
	//cache: "reload", //캐시 옵션에 따라 렌더링 방식이 다르므로 리로드 지정해주면 브라우저 리로드 되면서 데이터 변경
	// next: { revalidate: 3 },
	//next: { revalidate:0},
	//cache: "no-store" -> SSR로 행동함
	// }); //fetch를 통해서 revalidate를 실행 시킬 수 있음(ISR로변경) -> 0으로 하면 SSR로 변경
	// const data = await res.json();
	// const factText = data.data[0];

	return (
		<>
			<h1>제품 소개 페이지 입니다😀</h1>
			{/* 로컬에서 사용할때, 가장먼저 중요한 이미지는 priority이용하면 먼저 로딩 */}
			<Image
				src={clothesImage}
				alt="Clothes"
				priority
			/>
			<ul className={styles.ul}>
				{/* map메서드를 활용하여 바로 만들 수 있음 */}
				{products.map((product, index) => (
					<li key={index}>
						<Link href={`/products/${product.id}`}>{product.name}</Link>
					</li>
				))}
			</ul>
			{/* <article className={styles.article}>{factText}</article> */}
			{/* CSR로 렌더링 하는 방법 */}
			<MeowArticle />
		</>
	);
};

export default page;
