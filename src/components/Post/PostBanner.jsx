import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/earth-americas-solid.svg";

export default function PostBanner() {
  return (
    <StPostBanner>
      <PostBannerTitle>정보 공유 게시판</PostBannerTitle>
      <PostBannerDesc>
        다양한 정보를 공유할 수 있는 환경
        <br />
        다양한 글들을 접하고 자신의 의견을 나타내보세요!
      </PostBannerDesc>

      <PostBannerIcon />
    </StPostBanner>
  );
}

const StPostBanner = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  padding: 48px;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgb(47, 47, 64);
`;

const PostBannerTitle = styled.h2`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 2.2rem;
  font-weight: 300;
  color: #fff;
`;

const PostBannerDesc = styled.h4`
  font-size: 0.975rem;
  font-weight: 300;
  color: #fff;
  line-height: 1.5rem;
`;

const PostBannerIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 64px;
  transform: translateY(-50%);
  width: 150px;
  height: 150px;
  fill: #fff;
`;
