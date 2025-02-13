import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[65vh] flex flex-col mx-48 bg-[url('/img/computer.png')] bg-no-repeat bg-contain bg-left">
      <h1 className="flex text-cyan-300 items-center justify-center mt-[30vh] mb-[5vh] mx-auto text-8xl animate-pulse">Welcome to our class</h1>
      <p className=" text-center text-2xl font-mono text-yellow-300">Let's share our personal information.</p>
    </div>
  );
}
