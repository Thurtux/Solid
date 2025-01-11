import { Component } from "solid-js";

interface ProductCardProps {
  title: string;
  image: string;
  youtubeLink: string;
}

const ProductCard: Component<ProductCardProps> = (props) => {
  return (
    <div class="card w-80 bg-gray-700 shadow-xl">
      <figure><img src={props.image} alt={props.title} class="rounded-lg" /></figure>
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <div class="card-actions justify-end">
          <a href={props.youtubeLink} target="_blank" class="btn btn-primary">
            Listen on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
