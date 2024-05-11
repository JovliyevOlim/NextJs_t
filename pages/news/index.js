import React from "react";

export default function NewsArticles({ articles, data }) {
  return (
    <>
      <h1 className="content">{data}</h1>
      {/* {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })} */}
    </>
  );
}

export async function getStaticProps(context) {
  console.log("Running getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:4000/news");
//   const data = await response.json();

//   return {
//     props: {
//       articles: data,
//     },
//   };
// }
