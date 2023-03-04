import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getItem, postItem } from "@/store/reducers/item-slice.reducer";

export default function Home() {
  const dispatch = useDispatch();
  const itemProp = useSelector((state: any) => state.item);
  const [data, setData] = useState<string>("example data");

  const handleGetItem = () => {
    dispatch(getItem({ data }));
  };

  const handlePostItem = () => {
    dispatch(postItem({ data }));
  };

  useEffect(() => {
    console.log(itemProp.item);
  }, [itemProp]);

  return (
    <>
      <Head>
        <title>Next.js + Redux Toolkit + Redux-Saga</title>
        <meta
          name="description"
          content="Next.js + Redux Toolkit + Redux-Saga"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Next.js + Redux Toolkit + Redux-Saga</h1>
        </div>
        <div className={styles.section}>
          <div className={styles.formContainer}>
            <div>
              <input
                type="text"
                value={data ? data : ""}
                onChange={(e) => setData(String(e.target.value))}
              />
            </div>
            <div>
              <button onClick={handleGetItem}>Get Item</button>
              <button onClick={handlePostItem}>Post Item</button>
            </div>
          </div>
          <div className={styles.resultContainer}>
            <div>
              <h3>Result:</h3>
            </div>
            <pre>{JSON.stringify(itemProp.item, null, 2)}</pre>
          </div>
        </div>
      </main>
    </>
  );
}
