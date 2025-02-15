import type { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const PageHead: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      <title>{`next-auth-boilerplate | ${String(title)}`}</title>
      <meta
        name="description"
        content="next-auth-boilerplate. Made by Eesa Zahed"
      />
      <link rel="icon" href="/assets/images/favicon.ico" />
    </Head>
  );
};

export default PageHead;
