import React, { use } from "react";
import Head from "next/head";

export default function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        {/* Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD} */}
        Env Next Public {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(`Connecting ${user} and ${password}`);
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
