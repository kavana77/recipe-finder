import { useState } from "react";
const CookingSetup=()=> {
    const [checked, setChecked] = useState(false);

    return(
        <div className="w-[840px] h-[1387px] px-14">
            <div className="flex items-start gap-2 mb-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-1 w-5 h-5 accent-black rounded-full"
        />
        <div></div>
        
      </div>

 
        </div>
    )
}
export default CookingSetup