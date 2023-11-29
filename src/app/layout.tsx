import Link from "next/link";
import "./globals.css";
import { Poppins, Rajdhani } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Rajdhani({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mateus Sales",
  description:
    "Sou Mateus Lins Sales, desenvolvedor front end e este é meu site portfolio com meus sistemas e sites ja feitos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={
          "min-h-screen flex flex-col text-slate-700 " + poppins.className
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
