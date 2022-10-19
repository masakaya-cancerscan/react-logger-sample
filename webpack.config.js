module.exports = {
    resolve: {
        fallback: {
            os: false, // do not include a polyfill for abc
            util: false // include a polyfill for xyz
        },
    },

}