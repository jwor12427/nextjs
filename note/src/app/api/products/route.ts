import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

//최신버전으로는 route로 만들어서 사용해야 호출 가능
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
