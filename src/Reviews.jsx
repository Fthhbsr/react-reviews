import { useState } from "react";
import Review from "./Review";
import data from "./data";

const Reviews = () => {
  const [index, setİndex] = useState(0);

  return (
    <section>
      <Review key={data[index].id} {...data[index]} />
      <div className="btn-container"></div>
    </section>
  );
};

export default Reviews;
