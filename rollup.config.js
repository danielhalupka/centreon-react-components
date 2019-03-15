import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
//import postcss from 'postcss'
import autoprefixer from 'autoprefixer';
//import sass from 'node-sass';
import sass from 'rollup-plugin-sass'
import image from 'rollup-plugin-img';
import url from "postcss-url";
import nested from 'postcss-nested';
import css from "@modular-css/rollup";
import path from 'path';


const config = {
  input: 'src/index.js',
  moduleName: 'CentreonComponents',
  sourceMap: true,
  output: [
    {
      //dir: 'dist',
      format: 'esm',
      file: 'lib/index.js',
      sourceMap: true,
      //file: 'dist/index.js',
      //format: 'cjs',
      //name: 'CentreonComponent',
    },
  ],
  experimentalOptimizeChunks: true,
  treeshake: {
    pureExternalModules: true,
  },
  //preserveModules: true,
  external: [
    'axios',
    'react',
    'react-dom',
    'react-redux'
  ],
  plugins: [
    //postcss({ extract: true, modules: true, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**' }),
    resolve({
      //browser: true,
    }),
    commonjs(),
    
    image({
      output: 'lib',
      limit: 1
    }),
    
    
    /*
    sass({
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css),
      plugins: [
        //nested(),
        url({
          url: 'inline',
        }),
      ],
      //output: true,
    })
    */
    //css(),
    
    /*
    postcss({
      preprocessor: (content, id) => new Promise((resolve, reject) => {
        const result = sass.renderSync({ file: id })
        resolve({ code: result.css.toString() })
      }),
      plugins: [
        nested(),
        url({
          url: 'inline',
        }),
      ],
      sourceMap: true,
      //extract: true,
      //modules: true,
      //minimize: true,
      extensions: ['.sass','.scss','.css']
    }),
    */
   /*
   postcss()
    .use(url({
      url: 'copy',
      // base path to search assets from
      basePath: path.resolve('node_modules/bootstrap'),
      // dir to copy assets
      assetsPath: 'img',
      // using hash names for assets (generates from asset content)
      useHash: true
  }))
    .process(css, {
      from: "src/stylesheet/index.css",
      to: "dist/index.css"
    })
    */
   postcss({
    modules: true,
    //extract: true,
    plugins: [
      url({
        url: (asset) => {
          return `https://cdn.url/${asset.url}`
        },
        //url: 'copy',
        //basePath: path.resolve('src'),
        //assetsPath: 'lib/img',
        //url: 'inline',
      })
    ]
  })
  /*
  sass({
    output: 'lib/index.css',
  })
  */
  
  ],
};

export default config;