import React from "react";
import { images } from "./utils/images-utils";

export const Gallerie = ({onImageClick}) => {

  return (
    <div className="gallery">
      {images.map(({ key, src }) => (
        <div className="gallery-item" key={src} onClick={() => onImageClick(src.replace('-thumb', ''))}>
          <img src={`/img/${src}.png`} alt={src} />
        </div>
      ))}
    </div>
  );
};
