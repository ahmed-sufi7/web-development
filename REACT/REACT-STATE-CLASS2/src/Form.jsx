import { useState } from "react"

export default function Form(){
    let [fullName, setFullName] = useState("shradha")

    let handleNameChange = (event)=>{
        setFullName(event.target.value)
    }

    return(
        <form>
            <label htmlFor="username">Full Name</label>
            <input type="text" placeholder="Enter Your Name" value={fullName} onChange={handleNameChange} id="username"/>
            <button>Submit</button>
        </form>
    )
}