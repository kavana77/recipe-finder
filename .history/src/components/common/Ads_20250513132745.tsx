import Image from "../../assets/ads.svg"
import Star from "../../assets/star.svg"
export default function Ads(){
    return(
        <div className="relative w-[400px] h-[434px] bg-gradient-to-b from-[#357355] to-[#1D483B] overflow-hidden">
            <p className="text-white text-2xl text-center" style={{ fontFamily: 'Lobster, cursive' }}>Don't forget to eat healthy food</p>
           
                <img src={Star} />
            <img src={Image} className="flex items-center justify-center"/>

           
            
            <p className="text-gray-400 text-center">www.foodieland.com</p>
        </div>
    )
}