import Text from "@/components/ui/Text";

const Share = () => {
  return (
    <div className="w-full sm:w-[132px] mt-10 lg:mt-0">
      <Text className="text-center lg:text-left">SHARE THIS ON</Text>
      <div className="flex lg:flex-col flex-row justify-center lg:items-center gap-6 mt-6">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 24 24"
          >
            <path d="..." />
          </svg>
        </a>
        <a href="https://www.twitter.com/" aria-label="Twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 30 30"
          >
            <path d="..." />
          </svg>
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 24 24"
          >
            <path d="..." />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Share;
