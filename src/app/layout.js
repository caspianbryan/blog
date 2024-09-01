import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brian's Blog",
  description: "Short blogs by author Brian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-zinc-900 bg-zinc-100 flex flex-col min-h-screen`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
