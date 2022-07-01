import { useState, useEffect } from "react";
import Review from "./Review";
import data from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setİndex] = useState(0);

  const previous = () => {
    if (index === 0) {
      setİndex(data.length - 1);
    } else {
      setİndex(index - 1);
    }
  };

  const next = () => {
    if (index === data.length - 1) {
      setİndex(0);
    } else {
      setİndex(index + 1);
    }
  };

  const RandomReview = () => {
    const randIndex = Math.floor(Math.random() * data.length);
    randIndex !== index ? setİndex(randIndex) : RandomReview();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="container">
      <Review key={data[index].id} {...data[index]} />
      <div className="btn-container">
        <span className="previous" onClick={previous}>
          <FaChevronLeft />
        </span>
        <span className="next" onClick={next}>
          <FaChevronRight />
        </span>
        <button className="surprise-btn" onClick={RandomReview}>
          Surprise Me
        </button>
      </div>
    </section>
  );
};

export default Reviews;
