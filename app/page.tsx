import Image from "next/image";
import NewsList from "./_components/NewsList";

import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const news = await serverClient.getNews();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewsList initialNews={news} />
    </main>
  );
}
