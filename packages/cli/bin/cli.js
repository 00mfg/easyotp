#!/usr/bin/env node

import importLocal from "import-local";
import entry from "../lib/index.js";
import { log } from "@easyotp/utils";
import { filename } from "dirname-filename-esm";

const __filename = filename(import.meta);

if (importLocal(__filename)) {
  log.info("cli", "使用本地easyotp版本");
} else {
  entry(process.argv.slice(2));
}
