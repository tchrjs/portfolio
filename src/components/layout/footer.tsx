import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-wrapper flex flex-grow justify-center items-end border-t-1">
      <div className="container py-4">
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
      </div>
    </footer>
  );
}
