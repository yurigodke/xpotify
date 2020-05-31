module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/pages/index.js"
  ],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "components/**/*.js",
    "modules/**/*.js",
    "pages/**/*.js",
    "!pages/index.js"
  ],
  coverageReporters: ["lcov", "text"],
  moduleNameMapper: {
    "^Components(.*)$": "<rootDir>/components$1",
    "^Modules(.*)$": "<rootDir>/modules$1",
    "^Pages(.*)$": "<rootDir>/pages$1",
    "^Misc(.*)$": "<rootDir>/misc$1",
    "^.+\\.(scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["./enzyme.setup.js"]
};
