/** @format */

import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
	from: yup.string().email().required(), //데이터에 대한 형태를 정의해줌
	subject: yup.string().required(),
	message: yup.string().required(),
});

export async function POST(req: Request) {
	//json으로 변환해서 사용해야함
	const body = await req.json();
	if (!bodySchema.isValidSync(body)) {
		return new Response(
			JSON.stringify({ message: "메일 전송에 실패하였습니다." }),
			{ status: 400 }
		);
	}

	const { from, subject, message } = body;
	//노드메일러를 이용해서 메일을 전송
	return sendEmail(body) //
		.then(
			() =>
				new Response(
					JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }),
					{
						status: 200,
					}
				)
		)
		.catch((error) => {
			console.log(error);
			return new Response(
				JSON.stringify({ message: "메일 전송에 실패하였습니다." }),
				{ status: 500 }
			);
		});
}
