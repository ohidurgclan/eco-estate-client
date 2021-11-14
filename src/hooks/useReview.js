import { useEffect, useState } from "react"

const useReview = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-mountain-95987.herokuapp.com/user_review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return [review];
};
export default useReview;