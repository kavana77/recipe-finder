type IRecipe={
    id:number;
    title:string;
    image:string;
    time:string;
    cuisine:string;
};
const recipes: IRecipe
export default function RecommendationRecipe(){
    return(
        <div className="w-full h-[440px]">Recommendation Recipe</div>
    )
}