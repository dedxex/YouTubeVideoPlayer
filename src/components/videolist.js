import React from 'react';
import VideoItem from './videoitem';
const VideoList = ({videos,onVideoSelect}) => {
const VideoItems = videos.map((video) => {
        return <VideoItem
                                    onVideoSelect={onVideoSelect}
                                     video={video} />
    });
        return (
        <div className="cardlist col-md-12 ">
        <br/>
        <br/>
                {VideoItems}
        </div>
    );
}
export default VideoList;