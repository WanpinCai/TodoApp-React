import { useState } from "react";
import {PropTypes} from "prop-types"



export default function CounterButton( {by,incrementMethod,decrementMethod} ){

    //[0,f]
    //const [firstElt,secondElt] = array
    // const [count, setCount] = useState(0);

    // console.log(by)

    // function incrementCounterFunction(){
    //     // setCount(count + by)
    //     // console.log("count")
    //     incrementCounterParentFunction(by)
    // }

    // function decrementCounterFunction(){
    //     // setCount(count - by)
    //     // console.log("count")
    //     decrementCounterParentFunction(by)
    // }

    return(
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                 <button className="counterButton" 
                 onClick={ () => incrementMethod(by)}
                 >+{by}</button>
                <button className="counterButton" 
                 onClick={() => decrementMethod(by)}
                 >-{by}</button>
            </div>
        </div>
    )
}
CounterButton.propType = {
    by: PropTypes.number 
}

CounterButton.defaultProp = {
    by: 5
}