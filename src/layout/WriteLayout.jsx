import styled from "styled-components";
import Header from "../components/@common/Header";

export default function WriteLayout({ children }) {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  width: 850px;
  height: auto;
  padding: 0 36px;
  box-sizing: border-box;
  transform: translateX(-50%);
`;
