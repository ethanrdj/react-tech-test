import axios from "axios";

const getImages = async (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    await axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (e) => e.data[0].media_type === "image"
        );
        const images = parsedImages.map((e) => e.links[0].href);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
