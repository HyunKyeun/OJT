const { redirect } = require("next/dist/server/api-utils");
const { rewrites } = require("../next-test/next.config");

module.exports = {
  reactStrictMode: true,

  // async rewrites() {
  //   return[
  //     {
  //       source : "/signedup/:path*",
  //       destination : "/signedup/result",
  //     },
  //     {
  //       source : "/loggedin/:path*",
  //       destination : "/loggedin/result",
  //     }
  //   ];
  // },
}

