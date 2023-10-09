import axios, { AxiosResponse } from 'axios';


export default {
    requestBeer:  ():Promise<AxiosResponse> => axios.get('https://api.punkapi.com/v2/beers?per_page=10')
};