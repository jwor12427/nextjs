/** @format */

import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";

export default function Hero() {
	return (
		<section className="text-center">
			<Image
				className="rounded-full mx-auto"
				src={profileImage}
				alt="Picture of the author"
				width={250}
				height={250}
				priority
			/>
			<h2 className="text-3xl font-bold mt-2">{"Hi, I'm Wow3o"}</h2>
			<h3 className="text-xl font-semibold">Front-end Engineer</h3>
			<p>열심히 코딩을 배우는 중 입니다.</p>
			<Link href="/contact">
				<button className="bg-green-300 font-bold rounded-xl py-1 px-4 mt-2">
					Contact Me
				</button>
			</Link>
		</section>
	);
}
