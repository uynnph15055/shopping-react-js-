import { memo } from "react";

const  ButtonCallback = ({onIncrease}) =>  {
    console.log('uy');
    return (
        <button onClick={onIncrease}  className="px-3 py-2 bg-orange-600 text-[#ffff]">Run</button>
    )
}

export default memo(ButtonCallback);