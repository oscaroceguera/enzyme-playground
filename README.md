Enzyme CRA

`yarn add -D enzyme jest-enzyme @wojtekmaj/enzyme-adapter-react-17`

Enzyme CRA TS

`yarn add @types/jest ts-jest -D`

`yarn add enzyme @types/enzyme enzyme-to-json @wojtekmaj/enzyme-adapter-react-17 -D`

jest.config.js

```javascript
  module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}
```