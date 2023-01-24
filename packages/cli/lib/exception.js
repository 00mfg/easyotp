import { log, isDebug } from "@easyotp/utils";

function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
}
process.on("uncaughtException", (e) => printErrorLog(e, "error"));

process.on("unhandleRejection", (e) => printErrorLog(e, "promise"));
