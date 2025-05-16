import { useState } from "react";
import Text from "../ui/Text";
import Image from "../../assets/recipe/ingredient.png";

const steps = [
  {
    title: "1. Lorem ipsum dolor sit amet",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: Image,
    additional:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "2. Lorem ipsum dolor sit amet",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "3. Lorem ipsum dolor sit amet",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const CookingSetup = () => {
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  const handleCheck = (index: number) => {
    const updatedChecks = [...checkedStates];
    updatedChecks[index] = !updatedChecks[index];
    setCheckedStates(updatedChecks);
  };

  return (
    <div className="w-full max-w-[840px] mx-auto px-4 sm:px-6 md:px-14 py-10">
      <Text variant="heading">Ingredients</Text>

      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-3 mb-8 py-8 border-b border-gray-200"
        >
          <input
            type="checkbox"
            checked={checkedStates[index]}
            onChange={() => handleCheck(index)}
            className="mt-1 w-5 h-5 accent-black rounded-full"
          />
          <div>
            <h2
              className={`text-lg font-semibold ${
                checkedStates[index]
                  ? "line-through text-gray-400"
                  : "text-black"
              }`}
            >
              {step.title}
            </h2>
            <p
              className={`text-gray-700 mb-4 ${
                checkedStates[index] ? "line-through text-gray-400" : ""
              }`}
            >
              {step.content}
            </p>

            {step.image && (
              <img
                src={step.image}
                alt="Step visual"
                className="rounded-xl w-full object-cover mb-4"
              />
            )}

            {step.additional && (
              <p
                className={`text-gray-700 ${
                  checkedStates[index] ? "line-through text-gray-400" : ""
                }`}
              >
                {step.additional}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CookingSetup;
