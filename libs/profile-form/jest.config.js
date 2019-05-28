module.exports = {
  name: 'profile-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/profile-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
