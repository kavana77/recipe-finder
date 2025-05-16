import { useState } from "react";
import Text from "../ui/Text";
import Image from "../../assets/recipe/ingredient.png";

const CookingSetup = () => {
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  return (
    <div className="w-full max-w-[840px] mx-auto px-4 sm:px-6 md:px-14 py-10 lg:">
      <Text variant="heading">Ingredients</Text>

      {/* Step 1 */}
      <div className="flex items-start gap-3 mb-8 py-8 border-b border-gray-200">
        <input
          type="checkbox"
          checked={step1}
          onChange={() => setStep1(!step1)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div>
          <h2
            className={`text-lg font-semibold ${
              step1 ? "line-through text-gray-400" : "text-black"
            }`}
          >
            1. Lorem ipsum dolor sit amet
          </h2>
          <p
            className={`text-gray-700 mb-4 ${
              step1 ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
          <img
            src={Image}
            alt="Step visual"
            className="rounded-xl w-full object-cover mb-4"
          />
          <p
            className={`text-gray-700 ${
              step1 ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-start gap-3 mb-8 py-8 border-b border-gray-200">
        <input
          type="checkbox"
          checked={step2}
          onChange={() => setStep2(!step2)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div>
          <h2
            className={`text-lg font-semibold ${
              step2 ? "line-through text-gray-400" : "text-black"
            }`}
          >
            2. Lorem ipsum dolor sit amet
          </h2>
          <p
            className={`text-gray-700 mb-4 ${
              step2 ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-start gap-3 mb-8 py-8 border-b border-gray-200">
        <input
          type="checkbox"
          checked={step3}
          onChange={() => setStep3(!step3)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div>
          <h2
            className={`text-lg font-semibold ${
              step3 ? "line-through text-gray-400" : "text-black"
            }`}
          >
            3. Lorem ipsum dolor sit amet
          </h2>
          <p
            className={`text-gray-700 mb-4 ${
              step3 ? "line-through text-gray-400" : ""
            }`}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookingSetup;
