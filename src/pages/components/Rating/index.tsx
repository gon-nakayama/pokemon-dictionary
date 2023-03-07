import Star from "@/pages/components/Star";

type RatingProps = {
  numStar: 0 | 1 | 2 | 3 | 4 | 5;
};

const Rating = ({ numStar }: RatingProps) => {
  return (
    <>
      <div className="flex items-center">
        <Star isFilled={numStar > 0} />
        <Star isFilled={numStar > 1} />
        <Star isFilled={numStar > 2} />
        <Star isFilled={numStar > 3} />
        <Star isFilled={numStar > 4} />
      </div>
    </>
  );
};

export default Rating;
