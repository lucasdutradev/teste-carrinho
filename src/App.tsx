import { useContext } from "react";
import Button from "./components/Button";
import CartItem from "./components/cartItem";
import { ProductsContext, ProductsProviderData } from "./provider/postProducts";
import {
  BodyCart,
  BoxButtons,
  BoxCart,
  BoxContainer,
  ButtonCart,
  Cart,
  ContainerItens,
  FooterCart,
  HeaderCart,
  Line,
} from "./style";

function App() {
  const { products, handleData } = useContext(
    ProductsContext
  ) as ProductsProviderData;
  const totalPrice = products.reduce(
    (acc, curent) => acc + curent.sellingPrice,
    0
  );
  return (
    <>
      <BoxCart>
        <BoxButtons>
          <Button onClick={() => handleData()}>Sem frete/Com Frete</Button>
        </BoxButtons>
        <Cart>
          <HeaderCart>
            <h1>Meu Carrinho</h1>
          </HeaderCart>
          <Line />
          <BodyCart>
            <ContainerItens>
              {products.map((obj, index) => (
                <CartItem
                  key={index}
                  name={obj.name}
                  price={obj.price}
                  sellingPrice={obj.sellingPrice}
                  imageUrl={obj.imageUrl}
                />
              ))}
            </ContainerItens>
          </BodyCart>
          <Line />
          <FooterCart>
            <BoxContainer>
              <div>
                <span className="total">Total:</span>
                <span>
                  {totalPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              {totalPrice > 10 && (
                <span className="freteChange">
                  Parabéns, sua compra tem frete grátis !
                </span>
              )}
            </BoxContainer>
          </FooterCart>
          <Line />
          <ButtonCart>
            <Button>Finalizar compra</Button>
          </ButtonCart>
        </Cart>
      </BoxCart>
    </>
  );
}

export default App;
