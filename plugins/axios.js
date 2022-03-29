import { setClient } from '../helpers/http';

export default function ({ $axios, app }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url);
    return config;
  });
  setClient(app.$axios);
}
