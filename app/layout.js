import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "sonner";


export const metadata = {
  title: "CashBash",
  description: "DashBash – Cash Smarts, AI Sparks!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/* Footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
