import { useEffect, useState } from "react"

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5030/user_order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return [orders];
};
export default useOrder;