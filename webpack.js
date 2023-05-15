const path = require("path")

const webpack = require("webpack")

const direflowConfig = () => (config, env) => {

  const wc = webpackConfig(config, env)

  wc.entry.vendor = [

    "axios",

    "bootstrap",

    "react",

    "react-dom",

    "react-router-dom",

    "react-bootstrap",

    "lodash.merge",

    "react-loader-spinner",

    "rxjs"

  ]

  wc.entry["vendor-designer"] = [

    "@material-ui/core",

    "browser-image-compression",

  ]

  wc.entry["vendor-map"] = [

    "google-map-react"

  ]

  wc.entry["vendor-counter"] = [

    "react-countup"

  ]

  wc.entry["vendor-highlighter"] = [

    "react-syntax-highlighter"

  ]

  wc.entry["vendor-slider"] = [

    "slick-carousel"

  ]

  wc.entry["vendor-recapcha"] = [

    "react-google-recaptcha"

  ]

  wc.entry["vendor-pager"] = [

    "react-paginate"

  ]

  wc.entry["vendor-filesaver"] = [

    "file-saver"

  ]


  wc.optimization.splitChunks.cacheGroups = {

    vendor: {

      test: /[\\/]node_modules[\\/]((axios|bootstrap|react|react-dom|react-router-dom|react-bootstrap|lodash.merge|react-loader-spinner|rxjs).*)[\\/]/,

      name: "vendor",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorDesigner: {

      test: /[\\/]node_modules[\\/]((@material-ui\/core|dexie|browser-image-compression|react-papaparse).*)[\\/]/,

      name: "vendor-designer",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorMap: {

      test: /[\\/]node_modules[\\/]((google-map-react).*)[\\/]/,

      name: "vendor-map",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorCounter: {

      test: /[\\/]node_modules[\\/]((react-countup).*)[\\/]/,

      name: "vendor-counter",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorHighlighter: {

      test: /[\\/]node_modules[\\/]((react-syntax-highlighter).*)[\\/]/,

      name: "vendor-highlighter",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorSlider: {

      test: /[\\/]node_modules[\\/]((slick-carousel).*)[\\/]/,

      name: "vendor-slider",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorRecapcha: {

      test: /[\\/]node_modules[\\/]((react-google-recaptcha).*)[\\/]/,

      name: "vendor-recapcha",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorPager: {

      test: /[\\/]node_modules[\\/]((react-paginate).*)[\\/]/,

      name: "vendor-pager",

      chunks: "all",

      reuseExistingChunk: false,

    },

    vendorFilesaver: {

      test: /[\\/]node_modules[\\/]((file-saver).*)[\\/]/,

      name: "vendor-filesaver",

      chunks: "all",

      reuseExistingChunk: false,

    },

  }


  return {

    ...wc,

  }

}


}
