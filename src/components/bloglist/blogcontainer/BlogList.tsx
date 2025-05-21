import Text from "@/components/ui/Text";
import { blogList } from "@/utils/constant";

const BlogList = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {blogList.map((list) => (

        <div key={list.id} className="flex flex-col sm:flex-row gap-4 sm:gap-8 my-6">
          <img
            src={list.image}
            className="w-full sm:w-48 h-auto object-cover rounded-2xl"
            alt={list.title}
          />
          <div className="flex flex-col justify-between">
            <Text className="mt-2 sm:mt-4">{list.title}</Text>
            <Text variant="muted" className="my-4">{list.caption}</Text>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src={list.profile} className="w-6 h-6 rounded-full" />
                <Text variant="muted" className="font-bold text-black">{list.author}</Text>
              </div>
              <Text variant="muted">|</Text>
              <Text variant="muted">{list.date}</Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
