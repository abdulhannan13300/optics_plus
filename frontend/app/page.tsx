import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Optics Plus | Home",
  description: " Optics Plus home page",
};

export default function Page() {
  return (
    <main>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-25 sm:py-35 lg:py-45">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/login"
                className="rounded-md bg-primary-foreground px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Log into your account
              </Link>
              <a
                href="/auth/register"
                className="text-sm  hover:text-muted-foreground font-semibold leading-6 "
              >
                or create an account <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
