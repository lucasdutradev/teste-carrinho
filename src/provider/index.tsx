import { ProductsProvider } from "./postProducts";

interface AnyChildren {
  children: JSX.Element;
}

const Provider = ({ children }: AnyChildren) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Provider;
