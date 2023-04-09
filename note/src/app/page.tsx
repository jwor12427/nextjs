/** @format */

import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import os from "os"; //노드 APIs
import Counter from "@/components/Counter";

export default function Home() {
	//notFound(); //기본적으로 next.js에서 제공해주는 404페이지가 호출되고 사용자가 지정해줘야지만 UI 호출

	//서버 컴포넌트이기 때문에 서버에 출력
	console.log("서버에서 실행");
	console.log(os.hostname());
	return (
		<>
			<h1>홈페이지다!!!</h1>
			<Counter />
			{/* next.config.js에 url을 등록을 해야함 */}
			<Image
				src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
				alt="shop"
				width={400}
				height={400}
			/>
		</>
	);
}
