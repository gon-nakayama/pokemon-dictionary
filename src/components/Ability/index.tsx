import type { Abilities } from "@/constants";

type AbilityProps = {
  text: Abilities;
  value: number;
};

const Ability = ({ text, value }: AbilityProps) => {
  return (
    <>
      <dl>
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {text}
        </dt>
        <dd className="mb-3 flex items-center">
          <div className="mr-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2.5 rounded bg-emerald-400"
              style={{ width: `${(value / 150) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {value}
          </span>
        </dd>
      </dl>
    </>
  );
};

export default Ability;
