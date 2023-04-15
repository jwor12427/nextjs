/** @format */

"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
	from: string;
	subject: string;
	message: string;
};

const DEFAULT_DATA = {
	from: "",
	subject: "",
	message: "",
};

export default function ContactForm() {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);
	const [banner, setBanner] = useState<BannerData | null>(null);
	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(form);
		sendContactEmail(form) //
			.then(() => {
				setBanner({
					message: "메일이 성공적으로 보내졌습니다.",
					state: "success",
				});
				setForm(DEFAULT_DATA);
			})
			.catch(() => {
				setBanner({
					message: "메일 전송에 실패하였습니다. 다시 시도해 주세요",
					state: "error",
				});
			})
			//실패 || 성공 두경우 모두
			.finally(() => {
				setTimeout(() => {
					setBanner(null);
				}, 3000);
			});
	};
	return (
		<section className="w-full max-w-md">
			{banner && <Banner banner={banner} />}
			<form
				onSubmit={onSubmit}
				className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-400 rounded-xl text-white"
			>
				<label
					htmlFor="from"
					className="font-semibold"
				>
					Your Email
				</label>
				<input
					type="email"
					id="from"
					name="from"
					required
					autoFocus
					value={form.from}
					onChange={onChange}
					className="p-1 rounded-sm text-black"
				/>
				<label
					htmlFor="subject"
					className="font-semibold"
				>
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					required
					autoFocus
					value={form.subject}
					onChange={onChange}
					className="p-1 rounded-sm text-black"
				/>
				<label
					htmlFor="message"
					className="font-semibold"
				>
					Message
				</label>
				<textarea
					rows={10}
					id="message"
					name="message"
					required
					autoFocus
					value={form.message}
					onChange={onChange}
					className="text-black p-2"
				/>
				<button className="bg-violet-500 p-2 rounded-lg hover:bg-violet-800 transition-all">
					Submit
				</button>
			</form>
		</section>
	);
}
