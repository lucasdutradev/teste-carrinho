import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

export interface ProductType {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

export interface ProductsProviderData {
  products: ProductType[];
  handleData: () => {};
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isFree, setIsFree] = useState(false);
  const handleData = () => {
    setIsFree(!isFree);
    isFree
      ? axios
          .get("https://testecodeby.herokuapp.com/acimade")
          .then((response) => {
            const itens = response.data.items.map((iten: ProductType) => {
              return {
                name: iten.name,
                price: iten.price / 100,
                sellingPrice: iten.sellingPrice / 100,
                imageUrl: iten.imageUrl,
              };
            });
            setProducts(itens);
          })
          .catch((err) => console.log(err))
      : axios
          .get("https://testecodeby.herokuapp.com/abaixode")
          .then((response) => {
            const itens = response.data.items.map((iten: ProductType) => {
              return {
                name: iten.name,
                price: iten.price / 100,
                sellingPrice: iten.sellingPrice / 100,
                imageUrl: iten.imageUrl,
              };
            });
            setProducts(itens);
          })
          .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, handleData }}>
      {children}
    </ProductsContext.Provider>
  );
};
