import { useEffect, useState } from "react"

const useReview = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5030/user_review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return [review];
};
export default useReview;