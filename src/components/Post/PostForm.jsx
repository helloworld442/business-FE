import { useFetcher } from "react-router-dom";
import styled from "styled-components";

export default function PostForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/write">
      <PostFormFieldSet>
        <PostFormInput
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
        />
        <PostFormTextArea
          type="text"
          name="content"
          placeholder="내용을 입력하세요"
        />
        <PostFormButton>등록</PostFormButton>
      </PostFormFieldSet>
    </fetcher.Form>
  );
}

const PostFormFieldSet = styled.fieldset`
  width: 100%;
  padding: 24px 0;
  margin: 24px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const PostFormInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 18px;
  border-radius: 8px;
  border: 2px solid #d7e0e6;
  box-shadow: 0px 4px 6px 0px rgba(58, 62, 65, 0.1);
  outline: none;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 60px;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;

const PostFormTextArea = styled.textarea`
  width: 100%;
  height: 350px;
  padding: 0 18px;
  border-radius: 8px;
  border: 2px solid #d7e0e6;
  box-shadow: 0px 4px 6px 0px rgba(58, 62, 65, 0.1);
  outline: none;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 60px;
  resize: none;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;

const PostFormButton = styled.button`
  width: 300px;
  height: 64px;
  border: none;
  outline: none;
  border-radius: 10px;
  line-height: 48px;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: "Jua";
  color: #fff;
  background: rgb(47, 47, 64);
`;
