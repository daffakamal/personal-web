import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-900/90 py-6 px-7 sm:px-20 lg:px-32 xl:px-0 w-auto mt-4">
      <div className="mx-auto max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px]">
        <div className="text-[16px] text-center text-slate-50">
          Built with{" "}
          <span className="hover:underline hover:underline-offset-2">
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>
          </span>{" "}
          and{" "}
          <span className="hover:underline hover:underline-offset-2">
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </Link>
          </span>
          . Deployed with{" "}
          <span className="hover:underline hover:underline-offset-2">
            <Link
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </Link>
          </span>
          . Designed with{" "}
          <span className="hover:underline hover:underline-offset-2">
            <Link
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </Link>
          </span>
          . Illustration by{" "}
          <span className="hover:underline hover:underline-offset-2">
            <Link
              href="https://icons8.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icons8
            </Link>
          </span>
          <p className="pt-5 xl:pt-0">Made by Daffa K.</p>
        </div>
      </div>
    </footer>
  );
}
