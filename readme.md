github-shorten [![Version][version]](https://npmjs.org/package/github-shorten)
---------------------------

> Export your long github url to shorten.

## Install

```sh
$ npm install github-shorten -g
```

## Usage

```sh
$ github-shorten user/repos
```

* or

```sh
$ github-shorten -u user -r repos
```

* More

```sh
$ github-shorten --help
```

## Usage as a module

```
var shorten = require('github-shorten');

shorten('test', 'repos', function(err, shorted_url) {
	if(null !== err) {
		return console.log(err);
	}
	console.log(shorted_url);
});
```

## License

MIT

[version]: http://img.shields.io/npm/v/github-shorten.svg?style=flat