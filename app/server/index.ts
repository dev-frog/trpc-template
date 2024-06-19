import { publicProcedure, router } from "./trpc";

export const AppRouter = router({
  getNews: publicProcedure.query(async () => {
    return [
      {
        id: "1",
        title: "Hello",
        description: "Hello, world!",
        image: "https://example.com/image.jpg",
      },
      {
        id: "2",
        title: "",
        description: "Hello, world!",
        image: "https://example.com/image.jpg",
      },
      {
        id: "3",
        title: "Hello",
        description: "Hello, world!",
        image: "https://example.com/image.jpg",
      },
    ];
  }),
});
