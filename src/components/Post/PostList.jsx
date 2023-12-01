import styled from "styled-components";
import PostHead from "./PostHead";
import { useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  const { posts } = useLoaderData();

  return (
    <StPostList>
      <PostHead />
      <Suspense fallback={<div>loading....</div>}>
        {posts.map((post, index) => (
          <PostItem post={post} index={index} />
        ))}
      </Suspense>
    </StPostList>
  );
}

const StPostList = styled.ul`
  width: 100%;
  margin: 36px 0;
`;
