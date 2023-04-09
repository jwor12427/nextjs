/** @format */

//필요한 api를 만든뒤 호출(재사용이 가능한 모듈)

import path from "path";
import { promises as fs } from "fs";

//Product타입 정의
export type Product = {
	id: string;
	name: string;
	price: number;
	image: string;
};

//비동기 함수화
export async function getProducts(): Promise<Product[]> {
	//경로 생성
	const filePath = path.join(process.cwd(), "data", "products.json");
	const data = await fs.readFile(filePath, "utf-8");

	return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
	const products = await getProducts();
	return products.find((item) => item.id === id);
}
