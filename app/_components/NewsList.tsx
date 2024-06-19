"use client";

import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";

export default function NewsList({
  initialNews,
}: {
  initialNews: Awaited<ReturnType<(typeof serverClient)["getNews"]>>;
}) {
  const data = trpc.getNews.useQuery(undefined, {
    initialData: initialNews,
  }).data;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">News</h1>
      <ul className="flex flex-col items-center">
        {data.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
