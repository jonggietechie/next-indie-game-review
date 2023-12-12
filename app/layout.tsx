import type { Metadata } from "next";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import "./globals.css";
import { exo2, orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | IndieGamer",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className=" bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="boarder-t py-3 text-center text-slate-500 text-xs">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
