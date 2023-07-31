import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import { Providers } from "@/redux/provider";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Side from "@/components/Side";
import ClientWrapper from "./clientWrapper";
import getPosts from "@/utils/post";

const posts = getPosts(10);
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="theme-color">{`
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      `}</Script>
      <html lang="en" className="dark">
        <Head>
          <style> {`html { visibility:hidden; }`} </style>
        </Head>
        <body className={`${inter.className} bg-white dark:bg-gray-800`}>
          <Providers>
            <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900">
              <Navbar />
              <Header />
              <div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-7xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
                <ClientWrapper posts={posts}>{children}</ClientWrapper>
                <Side />
              </div>
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
