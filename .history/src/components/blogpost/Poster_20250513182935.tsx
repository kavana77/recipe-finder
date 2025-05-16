import Post from "../../assets/blogpost/poster.png"
const Poster=()=>{
    return(
        <div className="w-full h-[600px] px-14">
            <img src={Post} className="w-full h-full object-cover rounded-3xl"/>
        </div>
    )
}
export default Poster;