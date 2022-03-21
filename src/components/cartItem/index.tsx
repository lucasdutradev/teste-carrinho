import { ProductType } from "../../provider/postProducts";
import { BoxContainer, BoxDescription, BoxImg } from "./style";

const CartItem = ({ name, price, sellingPrice, imageUrl }: ProductType) => {
  return (
    <BoxContainer>
      <BoxImg>
        <img src={imageUrl} alt="item" />
      </BoxImg>
      <BoxDescription>
        <h2>{name}</h2>
        <span>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <p>
          {sellingPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </BoxDescription>
    </BoxContainer>
  );
};

export default CartItem;
