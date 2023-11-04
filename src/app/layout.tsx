import "yarn/styles/globals.css";
import { GeistSans, GeistMono } from "geist/font";

export const metadata = {
  title: "VoteKero",
  description: "Made by Perpetual Motion Squad",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background-50 font-sans text-text-900 ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
