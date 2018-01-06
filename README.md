# nanouptime

Get the time since your app is started

## What it does

We have `performance.now()` in browsers but we have not it in Node.js. So that package implements that function with 3 ways:

* If `window` is undefined but `process` is not, returns time based on `process.hrtime()` and `process.uptime()`
* If both of `window` and `performance` are defined, returns `performance.now()`
* Otherwise, it tries to return `Date.now()`

## License

[MIT](https://github.com/Kelin2025/nanouptime/blob/master/LICENSE)
