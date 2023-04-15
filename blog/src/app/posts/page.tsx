/** @format */

import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "ALL Posts",
	description: "모든 블로그 게시글",
};

export default async function PostsPage() {
	const posts = await getAllPosts();

	//고유한 각각의 카테고리를 만들어서 다시 배열로 만들어서 정렬(Set은 중복이 불가하므로)
	const categories = [...new Set(posts.map((post) => post.category))];
	return (
		<FilterablePosts
			posts={posts}
			categories={categories}
		/>
	);
}
