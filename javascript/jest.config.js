module.exports = {
  moduleDirectories: ['node_modules', 'js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  restoreMocks: true,
  testMatch: ['<rootDir>/**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
