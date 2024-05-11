import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleClick = () => {
    router.push("/product");
  };

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <h1>Next js pre-rendering</h1>
      <h1>{session ? `${session.user.name}` : ""}</h1>
      {/* <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link> */}
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
