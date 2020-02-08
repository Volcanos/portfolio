module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transformIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    snapshotSerializers: ['enzyme-to-json/serializer']
}