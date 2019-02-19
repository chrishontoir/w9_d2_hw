import React from 'react';

const ChartEntry = ({songName, songArtist, songImage, songPosition}) => {
  return(
  <div className="chart-entry">
    <h3>{songPosition}</h3>
    <img src={songImage}></img>
    <h4>{songName}</h4>
    <p>{songArtist}</p>
  </div>
)
};

export default ChartEntry;
