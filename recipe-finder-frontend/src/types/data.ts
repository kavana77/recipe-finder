import type { ReactNode } from "react";

export interface ICardProps {
  children: ReactNode;
  actions: ReactNode;
}
export interface IFavoriteProps {
  mode: "hint" | "warning";
  children: ReactNode;
}
export interface IRecipe {
  id: number;
  title: string;
  image: string;
  time?: string;
  category?: string;
}
export interface IMoreRecipe {
  id: number;
  title: string;
  image: string;
  time: string;
  category: string;
}
export interface ITastyCards {
  id: number;
  title: string;
  author: string;
  image: string;
}
export interface ICategoriesItem {
  id: number;
  image: string;
  title: string;
  gradient: string;
  shadow: string;
}
export interface IBlogList {
  id: number;
  title: string;
  caption: string;
  profile: string;
  image: string;
  author: string;
  date: string;
}
export interface IIngredient {
  id: number;
  name: string;
  checked: boolean;
}
export interface INutritionInfo {
  label: string;
  value: string;
}

export interface RawRecipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes?: number;
  dishTypes?: string[];
}
