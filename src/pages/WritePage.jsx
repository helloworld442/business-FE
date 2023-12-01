import { json, redirect } from "react-router-dom";
import PostForm from "../components/Post/PostForm";
import PostTemplate from "../components/Post/PostTemplate";
import WriteLayout from "../layout/WriteLayout";
import { createPost } from "../apis/post";

export default function WritePage() {
  return (
    <WriteLayout>
      <PostTemplate>
        <PostForm />
      </PostTemplate>
    </WriteLayout>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const title = formData.get("title");
  const content = formData.get("content");

  if (title.trim() === "") {
    throw json({ message: "제목을 입력해주세요" }, { status: 404 });
  }

  if (content.trim() === "") {
    throw json({ message: "내용을 입력해주세요" }, { status: 404 });
  }

  try {
    const data = await createPost({ title, content });

    return redirect("/");
  } catch (error) {
    throw json({ message: "작성에 실패했습니다." }, { status: 404 });
  }
}
