import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      {/* HEADER META TAGS */}
      <Head>
        <meta name="description" content="Next.js Template" />
        <meta name="keywords" content="Next.js template, Template" />
        <meta name="author" content="Erys Mozo | @Eryscode7" />
        <title>Next.js Template</title>
      </Head>

      {/* PAGE CONTENTS */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
