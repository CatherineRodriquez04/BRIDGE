// Landing Page

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center fade-in">
      <div className="flex flex-col">
        <div className="flex mb-0">
          <h1 className="font-jesery font-bold text-[175px]">Dead Man Hand</h1>
        </div>
        <div className="flex text-center justify-center mt-[-50px]">
          <Link href="/intro">
            <button className="rounded-lg bg-white text-black text-[30px] py-2 px-4 hover:scale-105">Enter</button>
          </ Link>
        </div>
      </div>
    </div>
  );
}

