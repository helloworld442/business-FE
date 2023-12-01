import styled from "styled-components";

export default function PostItem({ post, index }) {
  return (
    <StPostItem>
      <div className="id">{index}</div>
      <a className="title" href={"/detail/" + post.postId}>
        {post.title}
      </a>
      <div className="user">{post.nickname}</div>
      <div className="date">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
    </StPostItem>
  );
}

const StPostItem = styled.li`
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid #363636;

  .id {
    width: 15vw;
    border-right: 2px solid #363636;
  }

  .title {
    width: 60vw;
    border-right: 2px solid #363636;
  }

  .user {
    width: 15vw;
    border-right: 2px solid #363636;
  }

  .date {
    width: 10vw;
  }
`;
