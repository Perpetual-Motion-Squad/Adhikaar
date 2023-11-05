import Link from "next/link";
import Header from "./components/header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-10 w-4/5">
        <div className="mx-auto w-fit rounded-sm bg-secondary px-2 py-1 font-mono text-sm">
          🎉 India’s most revolutionary voting system
        </div>
        <div className="mx-auto mt-4 text-center text-5xl font-bold text-primary-500">
          Adhikaar
        </div>
        <div className="mx-auto w-3/5 text-center text-lg font-medium">
          The world’s first voting system that is completely secure, anonymous
          and transparent.
        </div>
        <div className="mx-auto mt-4 flex justify-center gap-3">
          <Link href={"/auth/phone"}>
            <button className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500">
              Vote now!
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-[20vh] w-4/5 -translate-x-1/2 rounded-t-xl shadow-xl">
        <img
          src="/images/banner_bg.png"
          className="w-full bg-center object-cover"
        />
      </div>
    </div>
  );
}
