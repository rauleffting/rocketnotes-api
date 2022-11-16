module.exports = {
  bail: true,
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/**/*.spec.js" /* the asterisk means that the test file can be any folder with any file insie. The src is to ignore files out of the src folder. */
  ],

  modulePathIgnorePatterns: ["<rootDir>/node_modules/"]
}