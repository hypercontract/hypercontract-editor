module.exports = {
  name: "hypercontract-editor",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/hypercontract-editor/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
