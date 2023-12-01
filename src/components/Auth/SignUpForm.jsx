import styled from "styled-components";
import { useFetcher } from "react-router-dom";
import InputField from "./InputField";

export default function SignUpForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/user/signup">
      <SignInFieldSet>
        <SignInFormTitle>회원가입</SignInFormTitle>
        <InputField type="text" name="nickname" label="이름" />
        <InputField type="password" name="password" label="비밀번호" />
        <SignInFormButton type="submit">회원가입</SignInFormButton>
      </SignInFieldSet>
    </fetcher.Form>
  );
}

const SignInFieldSet = styled.fieldset`
  width: 400px;
  height: 400px;
  background: #fff;
`;

const SignInFormTitle = styled.h2`
  margin-bottom: 48px;
  font-size: 2.2rem;
  font-weight: 550;
  color: #333;
  text-align: center;
`;

const SignInFormButton = styled.button`
  width: 100%;
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
