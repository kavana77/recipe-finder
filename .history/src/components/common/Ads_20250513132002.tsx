import Image from "../../assets/ads.svg"
export default function Ads(){
    return(
        <div className="w-[400px] h-[434px] bg-gradient-to-b from-[#357355] to-[#1D483B]">
            <p className="text-white text-2xl text-center" style={{ fontFamily: 'Lobster, cursive' }}>Don't forget to eat healthy food</p>
            <img src={Image}/>
            <p className="text-gray-400 text-center">www.foodieland.com</p>
        </div>
    )
}