import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "fb1a4825demsh5f65cbfa643d848p163e52jsnf37f6536cbc5",
    },
  });

  return data;
};
