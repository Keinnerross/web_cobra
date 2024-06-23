import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components_layout/header";
import Footer from "./components_layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shelby Fami ",
  description: "Shelby Fami Venezuela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
