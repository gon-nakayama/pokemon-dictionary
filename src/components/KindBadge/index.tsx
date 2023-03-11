import { translateKindToJaLabel } from "@/lib/translator";

type KindBadgeProps = {
  kind: string;
};

const baseClass =
  "mb-1 basis-2/3 rounded px-1.5 py-0.5 text-center text-xs font-medium";

const KindBadge = ({ kind }: KindBadgeProps) => {
  const Main = ({ label }: { label: string }) => {
    switch (kind) {
      case "normal":
        return <p className={`${baseClass} bg-gray-200 text-black`}>{label}</p>;
      case "fighting":
        return (
          <p className={`${baseClass} bg-yellow-500 text-white`}>{label}</p>
        );
      case "flying":
        return (
          <p className={`${baseClass} bg-indigo-300 text-black`}>{label}</p>
        );
      case "poison":
        return (
          <p className={`${baseClass} bg-violet-500 text-white `}>{label}</p>
        );
      case "ground":
        return (
          <p className={`${baseClass} bg-yellow-900 text-white`}>{label}</p>
        );
      case "rock":
        return <p className={`${baseClass} bg-gray-700 text-white`}>{label}</p>;
      case "bug":
        return (
          <p className={`${baseClass} bg-emerald-200 text-white`}>{label}</p>
        );
      case "ghost":
        return (
          <p className={`${baseClass} bg-violet-900 text-white `}>{label}</p>
        );
      case "steel":
        return <p className={`${baseClass} bg-blue-900 text-white`}>{label}</p>;
      case "fire":
        return <p className={`${baseClass} bg-red-500 text-white`}>{label}</p>;
      case "water":
        return <p className={`${baseClass} bg-blue-500 text-white`}>{label}</p>;
      case "grass":
        return (
          <p className={`${baseClass} bg-green-500 text-white`}>{label}</p>
        );
      case "electric":
        return (
          <p className={`${baseClass} bg-yellow-200 text-black`}>{label}</p>
        );
      case "psychic":
        return <p className={`${baseClass} bg-pink-500 text-white`}>{label}</p>;
      case "ice":
        return <p className={`${baseClass} bg-blue-700 text-white`}>{label}</p>;
      case "dragon":
        return <p className={`${baseClass} bg-pink-900 text-white`}>{label}</p>;
      case "dark":
        return <p className={`${baseClass} bg-gray-900 text-white`}>{label}</p>;
      case "fairy":
        return <p className={`${baseClass} bg-pink-300 text-black`}>{label}</p>;
      default:
        return <>nothing...</>;
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <Main label={translateKindToJaLabel(kind)} />
      </div>
    </>
  );
};

export default KindBadge;
