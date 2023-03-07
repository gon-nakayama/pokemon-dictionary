import Star from "@/pages/components/Star";

const Rating = () => {
  return (
    <>
      <div className="flex items-center">
        <Star isFilled />
        <Star isFilled />
        <Star isFilled />
        <Star isFilled />
        <Star isFilled />
      </div>
    </>
  );
};

export default Rating;
