import { FC, useState } from "react";
import Star from "./Star";
const createArray = (length: number) => [...Array(length)];
interface iProps {
  totalStars?: number;
  style?: object;
}

const StarRating: FC<iProps> = ({ totalStars = 5, style = {} }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div style={{ ...style }}>
      <div>
        {createArray(totalStars).map((_n: unknown, i: number) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>
      {selectedStars < totalStars ? (
        <span>
          {selectedStars} of {totalStars}
        </span>
      ) : (
        <span>Superb!</span>
      )}
    </div>
  );
};

export default StarRating;
