import Text from "./ui/Text";
import Image from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-8 lg:px-14 mt-16">
      <Text variant="heading" className="text-center mb-7">
        Contact us
      </Text>
      <div className="flex flex-col lg:flex-row gap-10 max-w-screen-lg mx-auto">
        {/* Image Section */}
        <div className="hidden w-full lg:w-[300px] h-[450px] bg-gradient-to-b from-white to-[#dbf3f8] md:flex items-end justify-end">
          <img src={Image} className="w-[200px] sm:w-[250px] h-[300px] sm:h-[350px] object-contain" alt="Contact Illustration" />
        </div>

        {/* Form Section */}
        <form className="w-full space-y-6 bg-white">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">NAME</label>
              <input
                type="text"
                placeholder="Enter your name..."
                required
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="Your email address..."
                required
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Row 2: Subject & Enquiry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">SUBJECT</label>
              <input
                type="text"
                placeholder="Enter subject..."
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">ENQUIRY TYPE</label>
              <select
                required
                className="p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Advertising</option>
                <option>Support</option>
                <option>Partnership</option>
              </select>
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">MESSAGE</label>
            <textarea
              rows={6}
              required
              placeholder="Enter your message..."
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
