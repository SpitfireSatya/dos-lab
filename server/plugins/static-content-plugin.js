
(function() {

  'use strict';

  const routeConfig = {
    method: 'GET',
    path: '/{fileName}',
    handler: (request, reply) => {
      console.log(`Processing request for ${request.url}`);
      console.time('time taken');
      const response = reply.file(request.params.fileName);
      console.log(`Processing complete for ${request.url}`);
      console.timeEnd('time taken');
      return response;
    }
  };

  const StaticContentPlugin = {
    name: 'staticContentPlugin',
    version: '1.0.0',
    register: async (server, options) => {
        server.route(routeConfig);
        return server;
    }
  };

  module.exports = StaticContentPlugin;

}());
