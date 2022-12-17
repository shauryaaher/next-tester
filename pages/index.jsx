import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";

export async function getServerSideProps() {
  const path =
    "https://firestore.googleapis.com/v1/projects/next-js-tester/databases/(default)/documents/oo/ll";
  const req = await fetch(path)
    .then((res) => res.json())
    .catch((error) => console.error(error));
  const data = await Object.values(req.fields.f).toString();
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
        <meta
          name="description"
          content="This is just a Next.js demo site which fetches data from Cloud Firestore"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello world!</h1>
        <h2>Welcome to this Next.js tester project.</h2>
        <Suspense fallback={<span>Loading...</span>}>{props.text}</Suspense>
        <Link
          href="https://github.com/shauryaaher/next-tester"
          style={{ color: "royalblue" }}
        >
          GitHub repo
        </Link>
      </main>
    </div>
  );
}
