import sendRequest from './send-request';
const BASE_URL = '/api/animes';

export function addAnimeToList(animeId) {
//Adding an Anime to a MyAnimePage
 return sendRequest(`${BASE_URL}/list/animes/${animeId}`, 'POST');
}
