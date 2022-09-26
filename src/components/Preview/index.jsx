import React from 'react';
import './styles.css';

export const Preview = ({ clothes, ears, eyes, nose, mouth }) => {
  return (
    <div className='preview'>
      <div className='elevation' style={{ backgroundImage: `url(/images/${clothes}.png)` }} />
      <div className='elevation' style={{ backgroundImage: `url(/images/${ears}.png)` }} />
      <div className='elevation' style={{ backgroundImage: `url(/images/${eyes}.png)` }} />
      <div className='elevation' style={{ backgroundImage: `url(/images/${nose}.png)` }} />
      <div className='elevation' style={{ backgroundImage: `url(/images/${mouth}.png)` }} />
    </div>
  );
};
