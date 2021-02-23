import Head from "next/head";
import styles from "../styles/Home.module.css";
import cleanStack from "clean-stack";

export default function Home() {
  const error = new Error("Missing unicorn");

  console.log(error.stack);
  console.log(cleanStack(error.stack));

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>test</main>
    </div>
  );
}
