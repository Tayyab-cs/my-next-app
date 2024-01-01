import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { NextResponse } from "next/server";

async function page() {
  const session = await getServerSession(authOptions);
  console.log("session: ", session);

  if (session === null) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }

  const res = NextResponse.json({
    authenticated: !!session,
    session,
  });

  return <div>{res}</div>;
}

export default page;
