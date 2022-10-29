import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.text();
  return {
    props: {
      text: data,
    },
  };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js tester project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello world!</h1>
        <h2>Welcome to this Next.js tester project.</h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          <p>{props.text}</p>
        </Suspense>
      </main>
    </div>
  );
}
