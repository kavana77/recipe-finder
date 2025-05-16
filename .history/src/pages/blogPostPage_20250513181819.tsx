import Blog from "@/components/blogpost/blog/Blog";
import Post from "@/components/blogpost/Poster";
import PostHeader from "@/components/blogpost/PostHeader";
import RecommendationRecipe from "@/components/common/RecommendationRecipe";
import SubscribeCard from "@/components/common/SubscribeCard";

export default function BlogPostPage(){
    return(
        <>
        <PostHeader/>
        <MaskGroup/>
        <Blog/>
        <SubscribeCard/>
        <RecommendationRecipe/>
        </>
    )
}