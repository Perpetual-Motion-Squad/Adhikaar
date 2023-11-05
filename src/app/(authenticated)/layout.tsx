import "@/styles/globals.css";
import { GeistSans, GeistMono } from "geist/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeaderboardPanel from "./dashboard/components/leaderboardPanel";

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
        className={`overflow-y-hidden bg-background-50 font-sans text-text-900 ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
