import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="h-auto w-36 px-2.5 flex items-center justify-center cursor-pointer hover:opacity-80"
      aria-label="Ahmad Hussaini - Software Engineer"
      aria-current="page"
    >
      <span className="text-3xl font-bold tracking-tight">Ahmad.</span>
    </Link>
  );
}
