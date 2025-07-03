import React,{useEffect,useState} from "react";


const ViewReview=()=>{

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

    return(
        <div className="review-list">
            <h2>All Movie Reviews</h2>
            {reviews.length===0 ? (<p>No reviews submitted yet</p>)
            :(<ul>
                {reviews.map((reviews,index)=>(
                    <li key={index} className="reviews-card">
                        <strong>{reviews.name}</strong>
                        reviewed<em>{reviews.movie}</em><br/>
                        Rating:{reviews.rating}/5<br/>
                        {reviews.comments && <p>{reviews.comments}</p>}
                    </li>
                ))}
            </ul>)}
        </div>
    );

};
export default ViewReview;
