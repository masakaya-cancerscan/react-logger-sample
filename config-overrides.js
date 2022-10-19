// // See. https://stackoverflow.com/questions/70398678/i-tried-to-polyfill-modules-in-webpack-5-but-not-working-reactjs
// module.exports = function override (config, env) {
//     console.log('override')
//     let loaders = config.resolve
//     loaders.fallback = {
//         "fs": false,
//         "tls": false,
//         "net": false,
//         "http": require.resolve("stream-http"),
//         "https": false,
//         "zlib": require.resolve("browserify-zlib") ,
//         "path": require.resolve("path-browserify"),
//         "stream": require.resolve("stream-browserify"),
//         "util": require.resolve("util/"),
//         "crypto": require.resolve("crypto-browserify")
//     }
//
//     return config
// }