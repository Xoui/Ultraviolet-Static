// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/service/",
  bare: "https://sdfsdf-5nb4.onrender.com/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
