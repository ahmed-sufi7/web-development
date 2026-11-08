import { useState } from "react";

export default function Counter() {
    let [count,setCount] = useState (0);

  let incCount = ()=>{
    setCount(count+1) //count value is updated during re-rendering of the component. It will not update the value of count immediately. So, if you try to log the value of count after calling setCount, it will still show the old value.
    // console.log(Count)
  }

  return(
    <div>
        <h3>Count: {count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
  )
}
