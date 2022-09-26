import React, { useState } from 'react';
import { Gallery } from '../../components/Gallery';
import { Preview } from '../../components/Preview';
import * as clothesData from '../../utils/images-utils';

export const Game = () => {
  const [clothes, setClothes] = useState('clothes/clothes1');
  const [ears, setEars] = useState('ears/ears1');
  const [eyes, setEyes] = useState('eyes/eyes1');
  const [nose, setNose] = useState('nose/nose1');
  const [mouth, setMouth] = useState('mouth/mouth1');
  return (
    <div className="container">
      <Preview
        clothes={clothes}
        ears={ears}
        eyes={eyes}
        nose={nose}
        mouth={mouth}
      />
      <Gallery
        index={0}
        name="Dress"
        data={clothesData.clothes}
        onItemClick={setClothes}
      />
      <Gallery
        index={1}
        name="Eyes"
        data={clothesData.eyes}
        onItemClick={setEyes}
      />
      <Gallery
        index={2}
        name="ears"
        data={clothesData.ears}
        onItemClick={setEars}
      />
      <Gallery
        index={3}
        name="nose"
        data={clothesData.nose}
        onItemClick={setNose}
      />
      <Gallery
        index={4}
        name="mouth"
        data={clothesData.mouth}
        onItemClick={setMouth}
      />
    </div>
  )
}
