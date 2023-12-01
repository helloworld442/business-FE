import styled from "styled-components";

export default function PostHead() {
  return (
    <StPostHead>
      <div className="id">NO</div>
      <div className="title">제목</div>
      <div className="user">글쓴이</div>
      <div className="date">날짜</div>
    </StPostHead>
  );
}

const StPostHead = styled.div`
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
