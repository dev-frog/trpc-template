import { publicProcedure, router } from "./trpc";

export const AppRouter = router({
  getNews: publicProcedure.query(async () => {
    return [
      {
        id: 1,
        category: "Helados",
        name: "Helado de vainilla",
        description:
          "Cremoso helado de vainilla hecho con los mejores ingredientes.",
        price: 3.99,
        image: "https://placehold.co/600x400.png",
      },
      {
        id: 2,
        category: "Helados",
        name: "Helado de chocolate",
        description:
          "Delicioso helado de chocolate con trozos de chocolate semiamargo.",
        price: 3.99,
        image: "https://placehold.co/600x400.png",
      },
      {
        id: 3,
        category: "Pasteles",
        name: "Pastel de chocolate",
        description:
          "Esponjoso pastel de chocolate con crema de chocolate y chispas de chocolate.",
        price: 5.99,
        image: "https://placehold.co/600x400.png",
      },
      {
        id: 4,
        category: "Tartas",
        name: "Tarta de manzana",
        description:
          "Deliciosa tarta de manzana con una capa crujiente de canela y azúcar.",
        price: 6.99,
        image: "https://placehold.co/600x400.png",
      },
      {
        id: 5,
        category: "Pasteles",
        name: "Pastel de zanahoria",
        description:
          "Esponjoso pastel de zanahoria con crema de queso y nueces caramelizadas.",
        price: 5.99,
        image: "https://placehold.co/600x400.png",
      },
    ];
  }),
});
