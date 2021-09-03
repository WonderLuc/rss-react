/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './src/',
  moduleNameMapper : {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom"
};