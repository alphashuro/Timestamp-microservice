module.exports = function (wallaby) {
  return {
    files: [
      'process_query.js',
    ],
    tests: [
      'test.js'
    ],
    testFramework: 'ava',
    env: {
      type: 'node'
    }
  };
};
