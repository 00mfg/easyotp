class Command {
  constructor(instance) {
    if (!instance) {
      throw new Error("command instance must not be null");
    }
    this.program = instance;
    const cmd = this.program.command(this.command);

    cmd.description(this.description);
    cmd.hook("preAction", () => {
      this.preAction();
    });
    cmd.hook("postAction", () => {
      this.postAction();
    });

    if (this.options?.length > 0) {
      this.options.forEach((option) => {
        cmd.option(...option);
      });
    }

    cmd.action((...param) => {
      this.action(param);
    });
  }

  get command() {
    throw new Error("command must be implement ");
  }

  get description() {
    throw new Error("description must implement");
  }

  get options() {
    return [];
  }

  get action() {
    throw new Error("action must implement");
  }

  preAction() {}

  postAction() {}
}

export default Command;
