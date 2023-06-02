module.exports = {
    moduleFileExtensions: ['js', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '**/__tests__/**/*.spec.[jt]s?(x)',
      '**/*.spec.[jt]s?(x)'
    ]
  };
  