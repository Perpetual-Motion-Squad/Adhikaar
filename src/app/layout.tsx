import "@/styles/globals.css";
import { GeistSans, GeistMono } from "geist/font";
import Web3ProviderModal from "./components/Web3ProviderModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/context/authProvider";

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
      <AuthProvider>
        <Web3ProviderModal>
          <body
            className={`bg-background-50 font-sans text-text-900 ${GeistSans.variable} ${GeistMono.variable}`}
          >
            {children}
            <ToastContainer />
          </body>
        </Web3ProviderModal>
      </AuthProvider>
    </html>
  );
}
