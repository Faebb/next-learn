import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  //se asigna los parametros a title de metadata
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    //title sera lo descrito antes mas "product"
    title: `Product ${title}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};
//otra forma de agregar paramentros como props
export default function ProductDetails({ params }: Props) {
  return <h1>Deails about product {params.productId}</h1>;
}
