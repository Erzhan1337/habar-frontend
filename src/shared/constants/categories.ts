import type { Category } from "@/shared/types/post.types";

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "Все напитки" },
  { value: "beer", label: "Пиво" },
  { value: "soda", label: "Газировка" },
  { value: "juice", label: "Соки" },
  { value: "energy", label: "Энергетики" },
  { value: "wine", label: "Вино" },
];
