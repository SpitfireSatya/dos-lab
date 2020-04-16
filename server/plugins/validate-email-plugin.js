
(function() {

  'use strict';

  const emailValidationRegex = new RegExp('^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$');

  const routeConfig = {
    method: 'post',
    path: '/api/validate-email',
    handler: (request, reply) => {
      console.log(`Processing request for ${request.url}`);
      console.time('time taken');
      const response = { isValid: emailValidationRegex.test(request.payload.email) };
      console.log(`Processing complete for ${request.url}`);
      console.timeEnd('time taken');
      return response;
    }
  };

  const ValidateEmailPlugin = {
    name: 'validateEmailPlugin',
    version: '1.0.0',
    register: async (server, options) => {
        server.route(routeConfig);
        return server;
    }
  };

  module.exports = ValidateEmailPlugin;

}());
