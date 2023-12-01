import styled from "styled-components";

export default function PostTemplate({ children }) {
  return <StPostTemplate>{children}</StPostTemplate>;
}

const StPostTemplate = styled.main`
  width: 100%;
  margin: 24px 0;
`;
