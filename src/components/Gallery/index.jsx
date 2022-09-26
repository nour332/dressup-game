import React from "react";
import "./styles.css";

export const Gallery = ({ index, name, data, onItemClick }) => {
  return (
    <div className="gallery" style={{
      left: `${70 * index + 10}px`
    }}>
      <h3>{name}</h3>
      {data.map(src => (
        <div
          className="gallery-item"  
          key={src}
          onClick={() => onItemClick(src.replace("-thumb", ""))}
        >
          <img src={`/img/${src}.png`} alt={src} />
        </div>
      ))}
    </div>
  );
};
