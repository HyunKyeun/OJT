const { redirect } = require("next/dist/server/api-utils");
const { rewrites } = require("../next-test/next.config");

module.exports = {
  reactStrictMode: true,

  // async rewrites() {
  //   return[
  //     {
  //       source: "/signedup/result",
  //       destination: "/signedup/path:*",
  //     }
  //   ];
  // },
};

