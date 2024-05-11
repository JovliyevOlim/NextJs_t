import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "ejflwjwfe",
  },
});
