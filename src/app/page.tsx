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
          VoteKero
        </div>
        <div className="mx-auto w-3/5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          suscipit a felis at venenatis. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
        </div>
        <div className="mx-auto mt-4 flex justify-center gap-3">
          <button className="rounded-lg bg-secondary px-3 py-2 text-black">
            Register today
          </button>
          <button className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500">
            Vote now
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-[20vh] w-4/5 -translate-x-1/2 rounded-t-xl bg-zinc-300/60 shadow-xl"></div>
    </div>
  );
}
