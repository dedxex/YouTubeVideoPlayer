import React from 'react';
    const VideoItem = ({video,onVideoSelect}) => {
    const url = video.snippet.thumbnails.medium.url;

    const trim = function(string){
    return string.substring(0,25);
    }
    const trimm = function(string){
    return string.substring(0,70);
    }
    const title = trim(video.snippet.title);
    const description = trimm(video.snippet.description);

    return(
            <div onClick={()=>{onVideoSelect(video)}} className="thumff">
                <div className="card text-xs-left thum">
                <img className="card-img-top img-fluid max-width: 100% height: auto"  src={url} alt="image" />
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
            </div>
            </div>
    );
}
export default VideoItem;