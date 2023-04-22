import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
});

let response = await axios.get('https://restcountries.com/v3.1/all')
let data =  JSON.stringify(response.data);

export default JSON.parse(data);