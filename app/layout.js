import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Tulika Mall - Coming Soon",
  description: "Full Stack Web Developer with Experience in Machine Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
        
    </html>
  );
}
