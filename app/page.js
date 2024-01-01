import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route.js";
import { Button } from "@/components/ui/button.jsx";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <>
          <h1 className="text-green-500 font-bold">
            {JSON.stringify(session)}
          </h1>
          <Button>shadcn btn</Button>
        </>
      ) : (
        <>
          <h1>Protected root page</h1>
          <h1>You are not an authorized person</h1>
        </>
      )}
    </main>
  );
}
