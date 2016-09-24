import React from 'react';
const VideoDetail = ({video}) => {
    if(!video) {
        return (
            <div className="col-xl-12">
                <i className= "fa fa-spinner fa-spin fa-5x fa-fw" ></i>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
        </div>
    );
}
export default VideoDetail;