import { json, redirect } from "react-router-dom";
import SignUpForm from "../components/Auth/SignUpForm";
import { registerUser } from "../apis/auth";

export default function SignUpPage() {
  return <SignUpForm />;
}

export async function action({ request }) {
  const formData = await request.formData();

  const nickname = formData.get("nickname");
  const password = formData.get("password");

  if (nickname.length < 3) {
    throw json({ message: "이름의 길이를 맞춰주세요." }, { status: 401 });
  }

  if (password.length < 3) {
    throw json({ message: "비밀번호의 길이를 맞춰주세요." }, { status: 401 });
  }

  try {
    const data = await registerUser({ nickname, password });

    return redirect("/user/signin");
  } catch (error) {
    throw json({ message: "회원가입에 실패하셨습니다." }, { status: 404 });
  }
}
