import Text from "../ui/Text";

export default function Header(){
    return(
        <div className="w-[840px] h-[289px]">
            <Text variant="heading">Blog & Article</Text>
            <Text variant="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
              <div className="bg-white rounded-2xl w-[450px] h-[50px] flex items-center justify-between px-4 mt-24">
                        <input type="email" placeholder="Enter your email" />
                        <Button>Subscribe</Button>
                      </div>
        </div>
    )
}