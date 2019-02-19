import React, {Component} from 'react';
import ChartList from '../components/ChartList';

class ChartBox extends Component {
  constructor(props){
      super(props);
      this.state = {
        entries: [],
        currentEntry: null
      };
    }


  componentDidMount(){
   const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
   const request = new XMLHttpRequest();
   request.open('GET', url);

   request.addEventListener("load", () => {
     if (request.status !== 200) return;
     const jsonString = request.responseText;
     const data = JSON.parse(jsonString);
     this.setState({entries: data.feed.entry})
   });

   request.send();
 }

  render(){
    return(
      <div className="box">
        <h1>Top 20 Music Chart</h1>
        <div className="chart-box">
          <ChartList data={this.state.entries}/>
        </div>
        </div>
    )
  }

}

export default ChartBox;
