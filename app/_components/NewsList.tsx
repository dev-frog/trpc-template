"use client";

import Link from "next/link";
import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";
import Image from "next/image";

export default function NewsList({
  initialNews,
}: {
  initialNews: Awaited<ReturnType<(typeof serverClient)["getNews"]>>;
}) {
  const products = trpc.getNews.useQuery(undefined, {
    initialData: initialNews,
  }).data;

  return (
    <section className="py-12 px-4 md:px-6 bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href="#"
              className="bg-card rounded-lg overflow-hidden group"
              prefetch={false}
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                width={600}
                height={400}
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
                <p className="font-semibold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
