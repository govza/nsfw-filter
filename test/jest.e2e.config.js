process.env.JEST_PUPPETEER_CONFIG = require.resolve('./jest-puppeteer.config.js');

module.exports = {
    testMatch: [ "**/test/e2e/**/*.[jt]s?(x)" ],
    verbose: true,
    rootDir: ".",
    testTimeout: 100000,
    maxConcurrency: 1,
    maxWorkers: 1,
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['./jest.e2e.setup.js'],
}
