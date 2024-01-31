import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTljMzYwNTQzMTg5OTAxNzhhNWFmMzViYzRjZDU1NyIsInN1YiI6IjY1YjI0ODliMGYyZmJkMDE0YTY2Y2IzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U75lFTT-xrOR05LIFCgz5fVGArc9-sWMSmWzJkSK4FI";

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN, 
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {headers, params})
        return data;
    } catch (error) {
        console.log(error);
        return error
    }

}