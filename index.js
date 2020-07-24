module.exports = {
  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module"
  },
  parser: "babel-eslint",
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  globals: {
    mc: false,
    wx: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    getApp: true,
    getCurrentPages: true
  },
  extends: ["airbnb-base"],
  rules: {
    // disallow use of console
    "no-console": "off",

    // disallow use of debugger
    "no-debugger": "warn",

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // specify the maximum length of a line in your program
    "max-len": ["error", 120],

    // require return statements to either always or never specify values
    "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }]
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["utils", "./src/utils"],
          ["services", "./src/services"]
        ],
        extensions: [".js", ".json"]
      }
    }
  }
};
