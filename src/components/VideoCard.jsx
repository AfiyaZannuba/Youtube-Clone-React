import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ( {video : { id: {videoId}, snippet}} ) => {
    // console.log(videoId, snippet)
    return (
        <Card>
            <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 358, height: 180 }} />

            <CardContent 
            sx={{backgroundColor: '#1e1e1e', height:  '106px'}}>
                <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl} />
            </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard