import React from 'react';
import ChartEntry from './ChartEntry';

const ChartList = ({data}) => {
  console.log(data);
  const chartNodes = data.map((entry, index) => {
    return(
      <ChartEntry
        key={index}
        songName={entry["im:name"].label}
        songArtist={entry["im:artist"].label}
        songImage={entry["im:image"][1].label}
      />
    )
  })
  return(
    <ul className="chart-list">
    {chartNodes}
    </ul>
  )
}

export default ChartList;
