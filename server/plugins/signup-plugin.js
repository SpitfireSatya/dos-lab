
(function() {

  'use strict';

  const routeConfig = {
    method: 'post',
    path: '/api/signup',
    handler: (request, reply) => {
      let response;
      console.log(`Processing request for ${request.url} with payload: ${JSON.stringify(request.payload)}`);
      console.time('time taken');
      const passwordRegex = new RegExp(request.payload.password);
      if(passwordRegex.test(request.payload.username)) {
        response = { message: 'Username cannot be same as password' };
      } else if(!passwordRegex.test(request.payload.confirmPassword)) {
        response = { message: 'Confirmed password did not match the password' }
      } else {
        response = { message: 'All good!' }
      }
      console.log(`Processing complete for ${request.url}`);
      console.timeEnd('time taken');
      return response;
    }
  };

  const SignupPlugin = {
    name: 'signupPlugin',
    version: '1.0.0',
    register: async (server, options) => {
        server.route(routeConfig);
        return server;
    }
  };

  module.exports = SignupPlugin;

}());
