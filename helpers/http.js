let client;

export function setClient(newClient) {
  client = newClient;
}

// Request helpers
const reqMethods = [
  'request', 'delete', 'get', 'head', 'options', // url, config
  'post', 'put', 'patch', // url, data, config
];

let http = {};

reqMethods.forEach((method) => {
  http[method] = function () {
    if (!client) throw new Error('apiClient not installed');
    return client[method].apply(null, arguments);
  };
});

export default http;
