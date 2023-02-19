import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

// import s from "./style/style.module.css"
export function Rating ({rating,s}){

    const ratingList = [];
    const ratingFill = Math.floor(rating);
    const ratingHalf = 5.4 - rating >= 0.5;
    const ratingEmpty = 5 - Math.floor(rating) - (ratingHalf ? 1 : 0);
    for (let i = 0; i < ratingFill; i++) {
      ratingList.push(<BsStarFill  key={"star-fill" + i} />);
    }
    if (ratingHalf) {
      ratingList.push(<BsStarHalf  key={"star-half"} />);
    }
    for (let i = 0; i < ratingEmpty; i++) {
      ratingList.push(<BsStar key={"star-empty" + i} />);
    }

return(
    <p className={s.rating} >
      {ratingList}  {rating}/5
    </p>
  )

}