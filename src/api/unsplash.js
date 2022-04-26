import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID N2Ghci4Au3JsJy7Wn_l5J31acPCfcUwDp7u23T1cInQ'
    }
});