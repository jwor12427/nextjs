"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
type Props = {
  posts: Post[];
  categories: string[];
};

//처음에 모든 포스트가 나오게 함
const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        // 모든 포스트를 선택할 수 있도록 만들어 줘야함(새로운 배열을 만들어야 함)
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
