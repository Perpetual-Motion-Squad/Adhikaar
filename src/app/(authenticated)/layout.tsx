import "@/styles/globals.css";
import { GeistSans, GeistMono } from "geist/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <main className="flex">
          <div className="flex min-h-screen w-1/5 min-w-[300px] flex-col border-r border-r-black/20 p-5">
            this is the sidepanel
          </div>
          {children}
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
