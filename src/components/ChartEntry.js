import React from 'react';

const ChartEntry = ({songName, songArtist, songImage}) => {
  return(
  <div className="chart-entry">
    <img src={songImage}></img>
    <h4>{songName}</h4>
    <p>{songArtist}</p>
  </div>
)
};

export default ChartEntry;
