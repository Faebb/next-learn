import Link from "next/link";

export default function Home() {
  return(
  <>
    <h1>Welcome home!</h1>
    {/* Link para navegar por la aplicacion no olvidar importar */}
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
  </>);
}
