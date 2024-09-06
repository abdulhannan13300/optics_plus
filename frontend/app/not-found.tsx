import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <CardHeader>
          <p className="text-base font-semibold ">404</p>
          <CardTitle className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
            Page not found
          </CardTitle>
          <CardDescription className="mt-6 text-base leading-7 ">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </CardDescription>
        </CardHeader>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm bg-primary-foreground hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a
            href="/"
            className="text-sm font-semibold  hover:text-muted-foreground"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
