import { useState } from "react";
import Text from "../ui/Text";
import Image from "../../assets/"
const CookingSetup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-[840px] h-[1387px] px-14 ">
        <Text variant="heading">Ingredients</Text>
      <div className="flex items-start gap-2 mb-12 py-8 border-gray-200 border-b">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div>
          <h2
            className={`text-lg font-semibold ${
              checked ? "line-through text-gray-400" : "text-black"
            }`}
          >
            1. Lorem ipsum dolor sit amet
          </h2>
          <p
            className={`text-gray-700 mb-4 ${
              checked ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>

          <img
            src="https://images.unsplash.com/photo-1604908177070-059d713d5ac5?auto=format&fit=crop&w=800&q=80"
            alt="Cooking step"
            className="rounded-xl w-full object-cover mb-4"
          />

          <p
            className={`text-gray-700 ${
              checked ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2 mb-2 py-8 border-gray-200 border-b">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div>
          <h2
            className={`text-lg font-semibold ${
              checked ? "line-through text-gray-400" : "text-black"
            }`}
          >
            2. Lorem ipsum dolor sit amet
          </h2>
          <p
            className={`text-gray-700 mb-4 ${
              checked ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2 mb-2 py-8 border-gray-200 border-b">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div>
          <h2
            className={`text-lg font-semibold ${
              checked ? "line-through text-gray-400" : "text-black"
            }`}
          >
            3. Lorem ipsum dolor sit amet
          </h2>
          <p
            className={`text-gray-700 mb-4 ${
              checked ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CookingSetup;
