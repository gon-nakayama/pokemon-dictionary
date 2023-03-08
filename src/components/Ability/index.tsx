import Rating from "@/components/Rating";
import type { Abilities } from "@/constants";

type AbilityProps = {
  text: Abilities;
  textAlign: "default" | "center";
  numStar: 0 | 1 | 2 | 3 | 4 | 5;
};

const Ability = ({ text, textAlign, numStar }: AbilityProps) => {
  return (
    <>
      <div className="flex p-3">
        <div className={textAlign ? "w-2/4 flex-initial" : "w-32 flex-initial"}>
          <div className="self-center text-lg text-black">{text}</div>
        </div>
        <hr className="text-black" />
        <div className="w-2/4 flex-auto">
          <Rating numStar={numStar} />
        </div>
      </div>
    </>
  );
};

export default Ability;
