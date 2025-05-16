import BlogContainer from "@/components/bloglist/blogcontainer/BlogContainer";
import GroupNumbers from "@/components/bloglist/Pagination";
import Header from "@/components/bloglist/Header";
import SubscribeCard from "@/components/common/SubscribeCard";

export default function BlogListPage(){
    return(
        <>
            <Header/>
            <BlogContainer/>
            <GroupNumbers/>
            <SubscribeCard/>

        </>
    )
}