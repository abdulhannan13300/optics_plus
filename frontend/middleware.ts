//middleware.js

// import { NextResponse } from "next/server";

// export function middleware(request: {
//   cookies: { get: (arg0: string) => any };
//   nextUrl: { pathname: string };
//   url: string | URL | undefined;
// }) {
//   const currentShop = request.cookies.get("current_shop"); // Check if the shop is stored in cookies

//   // Redirect to the shop selection page if no shop is selected
//   if (!currentShop && request.nextUrl.pathname !== "/select-shop") {
//     return NextResponse.redirect(new URL("/select-shop", request.url));
//   }

//   return NextResponse.next();
// }

import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers;
  const searchParams = url.searchParams.toString();
  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;
  //   const hostname = req.headers.get("host");

  // Handle cases where hostname might not have dots
  //   const customSubDomain = hostname?.split(".")[0];
  const customSubDomain = hostname
    .get("host")
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];
  console.log(customSubDomain);

  //   const searchParams = url.searchParams.toString();
  //   const path = `${url.pathname}${
  //     searchParams.length > 0 ? `?${searchParams}` : ""
  //   }`;

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
    );
  }

  //   if (
  //     (customSubDomain !== process.env.NEXT_PUBLIC_DOMAIN &&
  //       url.pathname === "/auth/login") ||
  //     url.pathname === "/auth/register"
  //   ) {
  //     return NextResponse.redirect(
  //       new URL(`${process.env.NEXT_PUBLIC_DOMAIN}${url.pathname}`, req.url)
  //     );
  //   }

  //   if (customSubDomain !== process.env.NEXT_PUBLIC_DOMAIN) {
  //     return NextResponse.rewrite(new URL(`/${customSubDomain}${path}`, req.url));
  //   }

  // If no subdomain or same domain as NEXT_PUBLIC_DOMAIN, return original request
  return NextResponse.next();
}

// import { NextRequest, NextResponse } from "next/server";

// export const config = {
//   matcher: [
//     /*
//      * Match all paths except for:
//      * 1. /api routes
//      * 2. /_next (Next.js internals)
//      * 3. /_static (inside /public)
//      * 4. all root files inside /public (e.g. /favicon.ico)
//      */
//     "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
//   ],
// };

// export default async function middleware(req: NextRequest) {
//   const url = req.nextUrl;
//   let hostname = req.headers;
//   const searchParams = url.searchParams.toString();
//   const pathWithSearchParams = `${url.pathname}${
//     searchParams.length > 0 ? `?${searchParams}` : ""
//   }`;

//   const customSubDomain = hostname
//     .get("host")
//     ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
//     .filter(Boolean)[0];

//   // Check if the request path starts with the [domain] route
//   const domainRouteMatcher = /^\/\[domain\](\/.*)?$/;
//   const domainRouteMatch = pathWithSearchParams.match(domainRouteMatcher);

//   if (customSubDomain) {
//     // If there's a subdomain, rewrite the URL as before
//     return NextResponse.rewrite(
//       new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
//     );
//   } else if (domainRouteMatch) {
//     // If there's no subdomain and the request is for a [domain] route, redirect to /not-found
//     const remainingPath = domainRouteMatch[1] || "";
//     return NextResponse.rewrite(new URL(`/not-found`, req.url));
//   } else {
//     // If there's no subdomain and the request is not for a [domain] route, redirect to /not-found
//     return NextResponse.next();
//   }
// }
