const { redirect } = require("next/dist/server/api-utils");

//env내에 API_KEY 숨겨두기
const API_KEY = process.env.API_KEY;
module.exports = {
  reactStrictMode: true,
  
  // ~~~/contact로 접속하면 대신 /form으로 보내준다
  async redirect(){
    return[
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      }
    ];
  },
// 실제주소는숨기고 Source 주소로 통일하여 공개
  async rewrites(){
    return[
      {
        source: "/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
    {
      source:"/movies/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    }
  ];
  },
};
