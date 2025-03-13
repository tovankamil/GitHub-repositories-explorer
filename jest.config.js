module.exports = {
  preset: "vite-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust this based on your alias configuration
  },
};
