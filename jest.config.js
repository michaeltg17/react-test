module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.scss$": '<rootDir>/src/testing/transform/jest-transform-dart-scss.js',
  },
  testEnvironment: "jsdom"
};