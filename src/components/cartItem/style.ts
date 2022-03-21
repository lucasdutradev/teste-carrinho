import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BoxImg = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    width: 60px;
    @media screen and(min-width: 350px) {
      width: 72px;
    }
  }
`;

export const BoxDescription = styled.div`
  margin-left: 8px;
  h2 {
    font-size: 14px;
    text-overflow: ellipsis;
    width: 180px;
  }
  span {
    color: #c9c9c9;
    font-size: 10px;
  }
  p {
    font-size: 15px;
    font-weight: 600;
  }
`;
