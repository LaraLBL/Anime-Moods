import sendRequest from './send-request';

const BASE_URL = '/api/anime';

export function watchlistAdd(animeData) {
  return sendRequest(BASE_URL, 'POST', animeData);
}
