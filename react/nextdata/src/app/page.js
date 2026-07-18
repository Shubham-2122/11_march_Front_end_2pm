import Link from "next/link";


export default function Home() {
  return (
   <>
      <Link href="/" >Home</Link> <Link href="/about">About</Link> <Link href="/blog">Blog</Link>
      
      <h1>Hello this page </h1>
    
   </>
  );
}
