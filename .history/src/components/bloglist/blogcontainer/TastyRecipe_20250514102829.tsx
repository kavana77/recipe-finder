type ITastyCards={
    id: number;
    title: string;
    author: string;
    image: string;
};
const tastyCard: ITastyCards[]=[
    {
        id:1,
        title: "Chi"
    }
]
const TastyRecipe=()=>{
    return(
        <div className="w-[400px] h-[479px]">TastyRecipe</div>
    )
}
export default TastyRecipe;