import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Sphere",
  description: "This is a Movie Search App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
