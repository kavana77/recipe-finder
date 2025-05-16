import Text from "@/components/ui/Text";
import Post from "../../../assets/blogpost/contentpost.png"
const BlogContent=()=> {
  return (
    <div className="w-full max-w-[920px] ">
      <Text >How did you start out in the food industy?</Text>
      <Text className="mb-8 mt-4" variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
        vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        Fusce id mollis ex.
        Praesent feugiat elementum ex ut suscipit.
      </Text>
      <Text>What do you like most about your job?</Text>
      <Text className="mb-8 mt-4" variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
        vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        Fusce id mollis ex.
        Praesent feugiat elementum ex ut suscipit.
      </Text>
      <Text>Do you cook at home on your days off?</Text>
      <img src={Post} className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl mt-8" />
      <Text className="mb-8 mt-4" variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
        vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        Fusce id mollis ex.
        
        Praesent feugiat elementum ex ut suscipit.
      </Text>
      <Text>What would your advice be to young people looking
        to get their foot in the door?
      </Text>
      <Text className="mb-8 mt-4" variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
        vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        Fusce id mollis ex.
        
        Praesent feugiat elementum ex ut suscipit.
      </Text>
      <div className="bg-gradient-to-r from-gray-300 p-4 border-t border-b border-gray-400 mt-8">
        <h1 className="text-4xl">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h1>
      </div>
      <Text className="mt-8">What is the biggest misconception that people have about being a professional chef?</Text>
      <Text variant="muted" className="mb-8 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at 
        congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. 
        Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</Text>
    </div>
  );
}
export default BlogContent
