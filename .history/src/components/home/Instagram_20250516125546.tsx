import Text from "../ui/Text";
import InstagramPost from "./";
import Post1 from "../../assets/instagrampost/post1.png";
import Post2 from "../../assets/instagrampost/post2.png";
import Post3 from "../../assets/instagrampost/post3.png";
import Post4 from "../../assets/instagrampost/post4.png";

const posts = [
  {
    imageSrc: Post1,
    likes: "44,686",
    caption: "Steak never be wrong, it’s suitable for you who want romantic dinner",
    date: "September 19",
  },
  {
    imageSrc: Post2,
    likes: "44,686",
    caption: "Fresh and healthy brunch ideas to energize your day",
    date: "September 19",
  },
  {
    imageSrc: Post3,
    likes: "44,686",
    caption: "Try this sushi recipe at home – easy and delicious!",
    date: "September 19",
  },
  {
    imageSrc: Post4,
    likes: "44,686",
    caption: "A perfect dessert to end your meal – creamy and sweet",
    date: "September 19",
  },
];

export default function Instagram() {
  return (
    <div className="w-full h-[964px] bg-gradient-to-b from-[#fafafa] to-[#E7F9FD]">
      <div className="text-center pt-20">
        <Text variant="heading" className="mb-8">Check out @foodieland on Instagram</Text>
        <Text variant="muted">
          Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolare magna aliqut enim ad minim
        </Text>
      </div>

      <div className="flex justify-between px-14 my-18">
        {posts.map((post, index) => (
          <InstagramPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
