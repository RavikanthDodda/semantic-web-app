import Axios from "axios";

const baseUrl = "http://54.185.100.144:8080";

class ArtworkService {
  getRecommendedArtworks = () => {
    return Axios.get(baseUrl + "/artworks/recommended");
  };
  getArtworks = (room) => {
    return Axios.get(baseUrl + "/artworks/" + room);
  };
}

export default new ArtworkService();
