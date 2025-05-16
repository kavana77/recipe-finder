import Image from "../../assets/ads.svg"
import Star from "../../assets/star.svg"
export default function Ads(){
    return(
        <div className="w-[400px] h-[434px] bg-gradient-to-b from-[#357355] to-[#1D483B]  ">
            <p className="  text-white text-2xl text-center top-10 " style={{ fontFamily: 'Lobster, cursive' }}>Don't forget to eat healthy food</p>
            <div className="relative flex items-center justify-center">
                <img src={Star} className="w-[350px]" />
            <img src={Image} className="absolute top-18"/>

            </div>
            
            <p className="text-gray-400 text-center">www.foodieland.com</p>
        </div>
    )
}