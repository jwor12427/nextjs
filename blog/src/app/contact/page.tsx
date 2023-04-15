/** @format */

import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Contact Me",
	description: "메일 보내기",
};
const LINKS = [
	{ icon: <AiFillGithub />, url: "" },
	{ icon: <AiFillTwitterCircle />, url: "" },
	{ icon: <FaBlog />, url: "" },
];

export default function ContactPage() {
	return (
		<section className="flex flex-col items-center">
			<h2 className="text-3xl font-bold my-2">Contact Me</h2>
			<p>jwor124@naver.com</p>
			<ul className="flex gap-4 my-2">
				{LINKS.map((link, index) => (
					<a
						href={link.url}
						key={index}
						target="_blank"
						rel="noreferrer"
						className="text-5xl hover:text-blue-500 transition-all"
					>
						{link.icon}
					</a>
				))}
			</ul>
			<h2 className="text-3xl font-bold my-8">OR Send me an Email</h2>
			<ContactForm />
		</section>
	);
}
