import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CashBash",
  description: "DashBash – Cash Smarts, AI Sparks!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Header */}
       <Header/>
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
