const PROXY_CONFIG = [
  {
    context: [
      "/person",
    ],
    target: "https://localhost:7009",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
