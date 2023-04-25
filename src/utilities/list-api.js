import sendRequest from './send-request';

const BASE_URL = '/api/list';

export function getAnimeList() {
  return sendRequest(BASE_URL);
}
