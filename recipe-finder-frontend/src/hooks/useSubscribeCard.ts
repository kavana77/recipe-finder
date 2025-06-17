import { subscribeToEmail } from "@/utils/http"
import { useState } from "react"

const useSubscribeCar = () => {
    const [email, setEmail] = useState("")
    const [subscribed, setSubscribed] = useState(false)
    const handleSubscribe = async () => {
        if(!email || email.trim() === ""){
            alert("Please enter a valid email.")
            return
        }
        try {
            await subscribeToEmail(email)
            setSubscribed(true)
        } catch (error) {
            alert(error)
        }
    }
    return { handleSubscribe, subscribed, setEmail, email}
}
export default useSubscribeCar