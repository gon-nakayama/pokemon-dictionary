import Imagecard from "@/pages/components/PokemonImage/Imagecard";

type ImagecardListProps = {
  imageList: Array<{
    name: string;
    url: string;
  }>;
};

const ImagecardList = ({ imageList }: ImagecardListProps) => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {imageList.map((image, index) => (
          <Imagecard key={index} imageApiPath={image.url} />
        ))}
      </div>
    </>
  );
};

export default ImagecardList;
