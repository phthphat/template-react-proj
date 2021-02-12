
import tailwindcss from 'tailwindcss'

module.exports = (config, env, helpers, params = defaultParams) => {

  // const results = helpers.getLoadersByName(config, 'postcss-loader')

  // const purgecss = await new PurgeCSS().purge({
  //   content: ["./src/template.html", ".src/**/*.jsx", ".src/**/*.tsx"],
  //   css: ['./src/**/*.css']
  // })

  // for (const result of results) {
  //   result.loader.options.plugins = [
  //     tailwindcss('./tailwind.config.js'),
  //     require('autoprefixer'),
  //     purgecss,
  //     ...result.loader.options.plugins
  //   ]
  // }

  // return config

  const purgecss = require('@fullhuman/postcss-purgecss')(
    {
      // Specify the paths to all of the template files in your project
      content: ['./src/**/*.jsx', './src/**/*.tsx'],
      css: ['./src/**/*.css'],

      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }
  );

  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Add tailwind css at the top.
    plugins.unshift(tailwindcss('./tailwind.config.js'));

    // Add PurgeCSS only in production.
    if (env.production) {
      plugins.push(purgecss);
    }
  });
  return config;
};