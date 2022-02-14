import * as React from 'react';
import TournamentBar from "../components/TournamentBar";

const Home: React.FC = () => {
  return (
    <div className="container">
        <TournamentBar />
        <h1>進行中のトーナメント</h1>
    </div>
  )
}

export default Home;
