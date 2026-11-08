import { useState } from "react";
function Counter(){

    const [count , setCount] = useState(0);
    function increase(){
            setCount(count+1);
        }

        function decrease(){
            setCount(count-1)
        }
    return(
        
        
        <div>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <h5>current count</h5>
            <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 m-10 "onClick={increase}>Increase</button>
            <button  className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 "  onClick={decrease}>Decrease</button>

        </div>
    )
}
export default Counter;