import { useState } from "react"

export default function Form(){
    let [fullName, setFullName] = useState("shradha")

    let handleNameChange = (event)=>{
        setFullName(event.target.value)
    }

    return(
        <form>
            <input type="text" placeholder="Enter Your Name" value={fullName} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    )
}