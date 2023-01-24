import Command from "@easyotp/command";
import { log } from "@easyotp/utils";

class initCommand extends Command {
  get command() {
    return "init [name]";
  }

  get description() {
    return "init project";
  }

  get options() {
    return [
      ["-f, --force", "是否强制更新", false],
      ["-s, --sale", "是否开启", false],
    ];
  }

  action([name, opts]) {
    log.verbose("init", name, opts);
  }
}

function Init(instance) {
  return new initCommand(instance);
}

export default Init;
