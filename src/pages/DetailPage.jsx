import PostDetail from "../components/Post/PostDetail";
import PostTemplate from "../components/Post/PostTemplate";
import DetailLayout from "../layout/DetailLayout";

export default function DetailPage() {
  return (
    <DetailLayout>
      <PostTemplate>
        <PostDetail />
      </PostTemplate>
    </DetailLayout>
  );
}
