type IRecipe={
    id:number;
    title:string;
    image:string;
    time:string;
    cuisine:string;
};
const recipes: IRecipe[] =[
    {
        id:1,
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        image: "../../assets/",
        time: "30 Minutes",
        cuisine: "Healthy"
    }
]
export default function RecommendationRecipe(){
    return(
        <div className="w-full h-[440px]">Recommendation Recipe</div>
    )
}