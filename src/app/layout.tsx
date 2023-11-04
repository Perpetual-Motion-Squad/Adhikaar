import "@/styles/globals.css";
import { GeistSans, GeistMono } from "geist/font";
import Web3ProviderModal from "./components/Web3ProviderModal";

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
      <Web3ProviderModal>
        <body
          className={`bg-background-50 font-sans text-text-900 ${GeistSans.variable} ${GeistMono.variable}`}
        >
          {children}
        </body>
      </Web3ProviderModal>
    </html>
  );
}
