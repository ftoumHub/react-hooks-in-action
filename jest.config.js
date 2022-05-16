module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],
    transform: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: [],
    testMatch: [
        '<rootDir>/**/*.spec.(js|jsx)'
    ],
    testEnvironment: "jsdom",
    transformIgnorePatterns: ['node_modules/(?!(tippy.js|plume-react)/)']
};