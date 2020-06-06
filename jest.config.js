module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/pages/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "components/**/*.js",
    "modules/**/*.js",
    "!pages/index.js"
  ],
  coverageReporters: ["lcov", "text"],
  moduleNameMapper: {
    "^Components(.*)$": "<rootDir>/components$1",
    "^Modules(.*)$": "<rootDir>/modules$1",
    "^Pages(.*)$": "<rootDir>/pages$1",
    "^Misc(.*)$": "<rootDir>/misc$1",
    "^Actions(.*)$": "<rootDir>/redux/actions$1",
    "^Mocks(.*)$": "<rootDir>/mocks$1",
    "^.+\\.(scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["./enzyme.setup.js"]
};
