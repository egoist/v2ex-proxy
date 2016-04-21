# v2ex-proxy [![NPM version](https://img.shields.io/npm/v/v2ex-proxy.svg)](https://npmjs.com/package/v2ex-proxy) [![NPM downloads](https://img.shields.io/npm/dm/v2ex-proxy.svg)](https://npmjs.com/package/v2ex-proxy)

> Play with V2EX API with no worry about CORS.

## Install

```bash
$ npm install -g v2ex-proxy
```

## Usage

```bash
$ v2ex-proxy
v2ex proxy is running at http://localhost:4100
```

## API

```bash
# hottest topics
/hot

# latest topics
/latest

# get topic by id
/topic/:id

# get replies by topicId
/replies/:topicId?page=1

# get user info
/user/:username
```

## License

MIT © [EGOIST](https://github.com/egoist)
