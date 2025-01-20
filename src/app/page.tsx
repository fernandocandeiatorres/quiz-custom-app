import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-screen items-center">
      <Link
        href={`/quiz/0`}
        className="btn btn-success mx-auto text-lg grow-shrink"
      >
        Quero iniciar o quiz!
      </Link>
    </div>
  );
}
