import axios from "axios";

const baseUrl = "http://localhost:8080/marinespecies";

const getAllMarineSpecies = async () => {
  return (await axios.get(baseUrl)).data;
};

export { getAllMarineSpecies };
