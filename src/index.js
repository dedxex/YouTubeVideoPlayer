import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY="AIzaSyCeIeQxUBEsQDi5w2AgDpi4CEMfbj1uN1I";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos : [],
       selectedVideo : null };

       this.onSearch('surfboards');
     
  }
  onSearch(term) {
    YTSearch({ key : API_KEY, term : term }, (videos) => {
  this.setState({ 
    videos : videos ,
     selectedVideo : videos[0] });
});
  } 
  render() {
    const videoSearch = _.debounce((term) => { this.onSearch(term) },300);
    return (
      <div className="container">
        <SearchBar onSearching={videoSearch}></SearchBar>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={(selectedVideo) =>{ this.setState({selectedVideo}); }}
          videos={this.state.videos} />
      </div>
    );
  }
}
ReactDom.render(<App />,document.querySelector('.container'));