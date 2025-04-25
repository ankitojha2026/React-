import axios from "axios";

const api = axios.create({

    baseURL: "https://restcountries.com/v3.1/",
});

export const getAllCountries = () => {
    return api.get("all?fields=name,flags,population,region,subregion,capital,languages,currencies,borders");}