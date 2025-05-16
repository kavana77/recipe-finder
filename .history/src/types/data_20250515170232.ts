export interface IRecipe{
    id:number;
    title:string;
    image:string;
    time:string;
    category:string;
};
export interface IMoreRecipe{
    id:number;
    title:string;
    image:string;
    time:string;
    category:string;
};
export interface ITastyCards{
    id: number;
    title: string;
    author: string;
    image: string;
};
export interface CategoriesItem  {
    id: number;
    image: string;
    title: string;
    gradient: string;
    shadow: string;
}