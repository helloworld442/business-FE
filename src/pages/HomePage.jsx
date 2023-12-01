import { json } from "react-router-dom";
import { getPosts } from "../apis/post";
import PostBanner from "../components/Post/PostBanner";
import PostList from "../components/Post/PostList";
import PostTemplate from "../components/Post/PostTemplate";
import HomeLayout from "../layout/HomeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <PostTemplate>
        <PostBanner />
        <PostList />
      </PostTemplate>
    </HomeLayout>
  );
}

export async function loader() {
  try {
    const posts = await getPosts();

    return posts;
  } catch (error) {
    throw json({ message: "읽기에 실패했습니다." }, { status: 404 });
  }
}
