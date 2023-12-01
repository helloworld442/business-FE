import styled from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <HeaderNav>
        <HeaderTitle href="/">정보</HeaderTitle>

        <HeaderMenu>
          <a href="/write">글쓰기</a>
          <a href="/user/signin">로그인</a>
          <a href="/user/signup">회원가입</a>
        </HeaderMenu>
      </HeaderNav>
    </StHeader>
  );
}

const StHeader = styled.header`
  width: 100%;
  height: 80px;
`;

const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.a`
  font-size: 1.25rem;
  font-weight: 300;
  color: rgb(47, 47, 64);
  cursor: pointer;
`;

const HeaderMenu = styled.ul`
  display: flex;
  gap: 36px;
  font-size: 0.925rem;
  font-weight: 650;
  font-family: "Noto Sans KR";
  color: #333;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  .active {
    color: #ffa500;
  }
`;
