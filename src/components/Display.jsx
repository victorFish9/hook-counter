import { useCounteValue } from "../CounterContext";

const Display = () => {
    const counter = useCounteValue()

    return <div>
        {counter}
    </div>
}

export default Display