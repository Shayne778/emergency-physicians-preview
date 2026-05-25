import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const password = process.env.PREVIEW_PASSWORD;

  if (!password) {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization");
  const expected = `Basic ${btoa(`preview:${password}`)}`;

  if (auth === expected) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required for private preview.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Private preview"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
