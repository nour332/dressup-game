import React from 'react';
import { GamesList } from './components/GamesList';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className='dashboard-content'>
      <GamesList />
    </div>
  )
}
