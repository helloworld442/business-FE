import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { deletePost, getPost, updatePost } from "../../apis/post";

export default function PostDetail() {
  const [disabled, setDisabled] = useState(true);
  const [post, setPost] = useState({});
  const [form, setForm] = useState({});
  const { postId } = useParams();

  const onChangeField = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onClickUpdateButton = async (e) => {
    e.preventDefault();

    try {
      const data = await updatePost(postId, form);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDeleteButton = async (e) => {
    e.preventDefault();

    try {
      const data = await deletePost(postId);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const onToggleUpdateButton = () => {
    setDisabled(!disabled);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { post } = await getPost(postId);
      setPost(post);
      setForm({ title: post.title, content: post.content });
    };

    fetchData();
  }, []);

  return (
    <StPostDetail>
      <PostFormBox>
        <PostFormInput
          type="text"
          name="title"
          value={form.title}
          disabled={disabled}
          onChange={onChangeField}
        />
        {!disabled && (
          <PostFormButton
            $primary
            onClick={(e) => {
              onClickUpdateButton(e);
              onToggleUpdateButton();
            }}
          >
            확인
          </PostFormButton>
        )}
      </PostFormBox>

      <PostFormBox>
        <PostFormTextArea
          type="text"
          name="content"
          value={form.content}
          disabled={disabled}
          onChange={onChangeField}
        />
        {!disabled && (
          <PostFormButton
            $primary
            onClick={(e) => {
              onClickUpdateButton(e);
              onToggleUpdateButton();
            }}
          >
            확인
          </PostFormButton>
        )}
      </PostFormBox>

      <PostFormButtons>
        <PostFormButton $primary onClick={onToggleUpdateButton}>
          수정
        </PostFormButton>
        <PostFormButton onClick={onClickDeleteButton}>삭제</PostFormButton>
      </PostFormButtons>
    </StPostDetail>
  );
}

const StPostDetail = styled.div`
  width: 100%;
  padding: 24px 0;
  margin: 24px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const PostFormBox = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
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

const PostFormButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const PostFormButton = styled.button`
  width: 150px;
  height: 54px;
  border: none;
  outline: none;
  border-radius: 10px;
  line-height: 48px;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: "Jua";
  color: #fff;
  background: rgb(47, 47, 64);

  ${(props) =>
    props.$primary &&
    css`
      border: 3px solid rgb(47, 47, 64);
      color: rgb(47, 47, 64);
      background: #fff;
    `}
`;
