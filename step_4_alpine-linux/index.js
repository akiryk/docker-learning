const hapi = require("@hapi/hapi");
// more-or-less the example code from the hapi-pino repo
// hapi is like express

async function start() {
  const server = hapi.server({
    // use 0.0.0.0 not localhost to enable it to get out of the Docker container
    host: "0.0.0.0",
    port: process.env.PORT || 3000
  });

  server.route({
    method: "GET",
    path: "/",
    handler() {
      return { success: true };
    }
  });

  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true
    }
  });

  await server.start();

  return server;
}

start().catch(err => {
  console.log(err);
  process.exit(1);
});