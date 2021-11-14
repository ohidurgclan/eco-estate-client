import { useEffect, useState } from "react"

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-mountain-95987.herokuapp.com/user_order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return [orders];
};
export default useOrder;