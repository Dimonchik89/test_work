const serversList = require('./servers.json');
const axios = require('axios');
const REQUEST_TIMEOUT = 5000;
const STAUS_CODE_SUCCESS_FROM = 200;
const STATUS_CODE_SUCCESS_TO = 299;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const checkServer = async (server) => {
  let responseStatus = STATUS_CODE_NOT_FOUND;
  try {
    const { url } = server;
    const response = await axios.get(url, { timeout: REQUEST_TIMEOUT });
    responseStatus = response.status;
  } catch(e) {
    // -- transform error message from catch into 404 error code for consistancy -- //
    responseStatus = e.code === 'ENOTFOUND' ? STATUS_CODE_NOT_FOUND : STATUS_CODE_SERVER_ERROR;
    // -- claim all other error codes as server error code = 500 -- //
  } finally {
    return {
      ...server,
      status: responseStatus
    }
  }
}

const findServer = async () => {
  let checkServerFunctions = [];

  for (const server of serversList) {
    checkServerFunctions.push(checkServer(server));
  }
  // -- let's enrich our servers collection with response statuses for each server -- //
  let serversWithResponseCodes = await Promise.all(checkServerFunctions);
  // -- filter servers so we will have only servers with status 200-299 -- //
  serversWithResponseCodes = serversWithResponseCodes.filter((server) => {
    return (server.status >= STAUS_CODE_SUCCESS_FROM && server.status <= STATUS_CODE_SUCCESS_TO);
  })
  // -- sort servers by priority -- //
  serversWithResponseCodes = serversWithResponseCodes.sort((a, b) => {
    return a.priority - b.priority;
  });

  if (!serversWithResponseCodes || !serversWithResponseCodes.length) {
    return Promise.reject(new Error('All servers are offline'));
  }

  // -- get first sorted item -- //
  return serversWithResponseCodes[0];
}
// -- lodash solution -- //
/*
const result = _.chain(serversWithResponseCodes)
                .filter((server) => { return server.status >= SUCCESS_STATUS_CODE_FROM && server.status <= SUCCESS_STATUS_CODE_TO })
                .sortBy('priority')
                .head()
                .value();
*/

module.exports = {
  findServer
}