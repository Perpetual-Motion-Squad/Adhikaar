import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full border-b border-b-black/20">
      <div className="mx-auto flex w-4/5 items-center justify-between border-x border-x-black/20 px-6 py-4">
        <div className="text-2xl">🇮🇳</div>
        <div className="flex items-center gap-x-10">
          <Link href={"/"}>
            <div className="transition-all hover:text-text-700">Home</div>
          </Link>
          <button className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500">
            Vote now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
