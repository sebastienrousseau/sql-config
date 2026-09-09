const fs = require("fs");
const path = require("path");

const presets = [".sqlfluff",".sql-formatter.json"];
const defaultPreset = ".sqlfluff";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/sql-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
