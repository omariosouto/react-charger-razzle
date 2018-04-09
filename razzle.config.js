const { ReactLoadablePlugin } = require('react-loadable/webpack');
const razzleHeroku = require("razzle-heroku")

module.exports = {
  modify: (config, {target, dev}, webpack) => {
    config = razzleHeroku(config, {target, dev}, webpack)
    
    if (target === 'web') {
      return {
        ...config,
        plugins: [
          ...config.plugins,
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
          }),
        ],
      };
    }

    return config;
  },
};
