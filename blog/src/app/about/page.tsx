/** @format */

import Hero from "@/components/Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "About Me",
	description: "나에 대한 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
	return (
		<>
			<Hero />
			<section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
				<h2 className={TITLE_CLASS}>Who Am I?</h2>
				<p>
					개발을 공부하는 초보 개발자 입니다 <br />
					새로운 것을 배워 나가는 것이 묙표 입니다.
				</p>
				<h2 className={TITLE_CLASS}>Join</h2>
				<p>
					그림그리는 것을 좋아함(미술 전공)
					<br />
					게임을 좋아함(PS5,스위치 게임 위주) <br />
					이것저것 물건 모으는 것도 좋아함
				</p>
				<h2 className={TITLE_CLASS}>Skills</h2>
				<p>
					React, Vue, Next.js(Leading...), javascript, typescript(Leading....)
				</p>
				<p>Git TailwindCss</p>
				<p>VS code, MongoDB</p>
			</section>
		</>
	);
}
