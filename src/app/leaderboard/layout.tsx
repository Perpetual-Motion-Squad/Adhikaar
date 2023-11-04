import { GeistSans, GeistMono } from "geist/font";
import Header from "../components/header";

export const metadata = {
  title: "Leaderboard - VoteKero",
  description: "Made by Perpetual Motion Squad",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section
        className={`bg-background-50 font-sans text-text-900 w-full h-full ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Header />
        {/* Add Sidebar and navbar header here */}
        {children}
      </section>
  );
}
