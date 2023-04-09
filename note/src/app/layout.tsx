/** @format */

import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Metadata } from "next";

//폰트 정의 최상위 경로인 layout에 정의 해주는 것이 좋음
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
	weight: "700",
	subsets: ["latin"],
});

//head메타 데이터 ->  layout에 지정 시 하위에 있는 페이지 까지 메타 데이터 지정
//page에 메타 데이터 지정 시 그 해당 페이지에만 메타 데이터 지정
export const metadata: Metadata = {
	title: "제품을 판매하는 사이트",
	description: "제품을 판매하는 사이트를 제작하였습니다.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={sans.className}
		>
			<body>
				{/* 최상위 경로에서 지정하는 것, 어떤 경로로 가던지 남아있음 */}
				<header className={styles.header}>
					<h1 className={gothic.className}>Demo Note</h1>
					<nav className={styles.nav}>
						<Link href="/products">Products</Link>
						<Link href="/about">About</Link>
						<Link href="/contact">Contact</Link>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
