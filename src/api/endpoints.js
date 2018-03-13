import axios from 'axios';

const vimeo_endpoints = {
    channel: 'https://api.vimeo.com/channels/shortoftheweek/videos?access_token=080e59648640c1fcab84f10b4ca0f82c'
}

const getVideos = function () {
    return axios.get(vimeo_endpoints.channel);
}

export default getVideos;