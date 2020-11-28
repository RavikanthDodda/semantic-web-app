import Axios from "axios";

const baseUrl = "http://54.185.100.144:8080";

const artworks = [
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
  {
    title: "artwork1",
    text: "dwkdwkdjwjdkwdjkwjdkwjdkjwdwkdjwkdkwkdjwj",
    image: "",
  },
];
class ArtworkService {
  getRecommendedArtworks = () => {
    return Axios.get(baseUrl + "/artworks/recommended");
  };
  getArtworks = (room) => {
    // return Axios.get(baseUrl + "/artworks/" + room);
    return artworks;
  };
}

export default new ArtworkService();
