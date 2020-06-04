const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = (config, env) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
        "@containers": resolve("src/view/dashboard/containers"),
        "@images": resolve("src/_images"),
        "@controllers": resolve("src/controllers"),
        "@services": resolve("src/model/services"),
        "@state": resolve("src/model/state"),
        "@helpers": resolve('src/helpers'),
        "@root": resolve('src'),
    });
    return config;
};
