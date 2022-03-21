import styled from "styled-components";

export const BoxCart = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
`;

export const ContainerItens = styled.ul`
  max-height: 400px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;

export const BoxButtons = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    span.total {
      font-size: 15px;
      font-weight: bold;
    }
    span {
      font-weight: 600;
    }
  }

  .freteChange {
    margin: 8px 0;
    background-color: #cafc95;
    text-align: center;
    padding: 5px 0;
    border-radius: 8px;
    color: black;
    font-size: 14px;
  }
`;

export const Cart = styled.div`
  width: 90%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderCart = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 700;
  }
`;

export const BodyCart = styled.div`
  width: 90%;
`;

export const FooterCart = styled.section`
  width: 90%;
`;

export const ButtonCart = styled.section`
  width: 90%;
`;
