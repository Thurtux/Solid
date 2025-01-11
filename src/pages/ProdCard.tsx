import { Component } from "solid-js";
import ProductCard from "../components/ProductCard";

const albums = [
  {
    id: 1,
    title: "Rodeo",
    image: "https://lastfm.freetls.fastly.net/i/u/770x0/8094bc29edd6d557546a5ff997197ee6.jpg#8094bc29edd6d557546a5ff997197ee6", // Coloque suas imagens na pasta public/images
    youtubeLink: "https://www.youtube.com/watch?v=KnZ8h3MRuYg&list=PLrzEPoI2gTMB_bkjIMGnixnLrvX6IGurp", // Substitua pelo link real
  },
  {
    id: 2,
    title: "Whole Lotta Red",
    image: "https://lastfm.freetls.fastly.net/i/u/500x500/0db2bb3f8dcebb4279db97dc7608d090.gif",
    youtubeLink: "https://www.youtube.com/watch?v=EwdsnGfrd-k&list=PL7RVBKKO9UqyEr8kqLe9152SIktQjDl64&index=1",
  },
  {
    id: 3,
    title: "Damn.",
    image: "https://lastfm.freetls.fastly.net/i/u/500x500/8a59ed3a9c71cb5113325e2026889e4a.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=pltUZzEFLR0&list=PLrbUxSl4nExNkwtsO8J-1PsN86RxvrPrT",
  },
];

const ProdCard: Component = () => {
  return (
    <div class="flex flex-wrap gap-6 justify-center p-6">
      {albums.map((album) => (
        // Não passe 'key' para o componente ProductCard
        <ProductCard
          title={album.title}
          image={album.image}
          youtubeLink={album.youtubeLink}
        />
      ))}
    </div>
  );
};
export default ProdCard;
