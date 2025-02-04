import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <h1>Play game and have fun</h1>
      <h2>select a game to play</h2>
      <Link to={'games/avalon'}>Avalon</Link>
    </div>
  );
};

export default Dashboard;
