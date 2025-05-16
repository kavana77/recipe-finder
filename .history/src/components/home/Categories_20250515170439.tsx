import Text from "../ui/Text"
import Button from "../ui/Button"
impo

const Categories=()=>{
    return(
        <div className="w-full h-[342px] px-14">
            <div className="flex justify-between items-center">
            <Text variant="heading">Categories</Text>
            <Button className="bg-[#E7FAFE] text-black">View All Categories</Button>
            </div>
            <div className="flex justify-between mt-8">
                {categoryItems.map((item)=>(
               <div key={item.id} className={`w-[180px] h-[200px] rounded-4xl bg-gradient-to-b ${item.gradient} flex flex-col items-center justify-center`}>
               <div className={`w-[52px] h-[52px] rounded-full bg-transparent 
                 flex items-center justify-center ${item.shadow}`}>
                 <img src={item.image} className="w-10 h-10 " />
               </div>
               <span className="mt-4 font-bold text-center">{item.title}</span>
             </div>
             
                ))}
            </div>
        </div>
        
    )
}
export default Categories