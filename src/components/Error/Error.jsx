import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function Error() {
  const error = useRouteError();

  console.log(error);

  return (
    <ErrorBox>
      <ErrorTitle>{error.status}</ErrorTitle>
      <ErrorDesc>{error.data.message}</ErrorDesc>
    </ErrorBox>
  );
}

const ErrorBox = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 500px;
  height: 500px;
`;

const ErrorTitle = styled.h2`
  margin-bottom: 18px;
  font-size: 7.2rem;
  font-weight: 300;
  color: red;
`;

const ErrorDesc = styled.h4`
  font-size: 1.8rem;
  font-weight: 300;
  color: #333;
`;
