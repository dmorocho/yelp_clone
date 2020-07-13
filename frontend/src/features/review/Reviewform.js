import React, { useState } from "react";
import "./review.css";

const Reviewform = () => {
  const [rating, setRating] = useState("0");
  let message = [
    "select your rating",
    "Mek! Methinks no",
    `Meh. I've experienced better`,
    `A-OK`,
    `Yay! I'm a fan.`,
    `Woohoo! As good as it gets!`,
  ];
  console.log("rating" + rating);

  return (
    <div>
      <form>
        <div>
          <ul className="rating_review" data-rating={rating}>
            <i
              onMouseDown={(e) => {
                debugger;
                setRating(1);
              }}
              value={1}
              class="review_star-1"
            >
              ★
            </i>
            <i
              className="review_star-2"
              onMouseDown={(e) => {
                debugger;
                setRating(2);
              }}
              value={2}
            >
              ★
            </i>
            <i
              className="review_star-3"
              onMouseDown={(e) => {
                debugger;
                setRating(3);
              }}
              value={3}
            >
              ★
            </i>
            <i
              className="review_star-4"
              onMouseDown={(e) => {
                debugger;
                setRating(4);
              }}
              value={4}
            >
              ★
            </i>
            <i
              className="review_star-5"
              onMouseDown={(e) => {
                debugger;
                setRating(5);
              }}
              value={5}
            >
              ★
            </i>
          </ul>
          <p>{`${message[rating]}`}</p>
        </div>
        <input className="review_input" placeholder={"leave a message"} />
      </form>
    </div>
  );
};

export default Reviewform;
