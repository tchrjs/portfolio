import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bottom-0 py-4">
      <p className="text-sm text-center">
        Designed and developed by{" "}
        <span className="font-bold">
          <Link
            target="_blank"
            className="underline"
            href={"https://github.com/tchrjs"}
          >
            @tchrjs
          </Link>
        </span>
      </p>
    </footer>
  );
}
