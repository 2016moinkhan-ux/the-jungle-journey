// middleware.js
import { NextResponse } from "next/server";

// 👉 Yeh zaroori hai: sirf /admin/* aur /_health/* routes pe middleware chale
export const config = { matcher: ["/admin/:path*", "/_health/:path*"] };

export function middleware(req) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const auth = req.headers.get("authorization") || "";
  if (!auth.startsWith("Basic ")) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="JJ Admin"' },
    });
  }

  const [user, pass] = Buffer.from(auth.split(" ")[1], "base64")
    .toString()
    .split(":");

  if (user !== process.env.ADMIN_USER || pass !== process.env.ADMIN_PASS) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}