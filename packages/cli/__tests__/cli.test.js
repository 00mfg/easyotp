import path from "node:path";
import { execa } from "execa";

const CLI = path.join(__dirname, "../bin/cli.js");
const bin =
  () =>
  (...args) =>
    execa(CLI, args);

describe("easyotp test", () => {
  it("unknow command", async () => {
    const { stderr } = await bin()("iii");
    expect(stderr).toContain("unknow command:iii");
  });

  it("should not throw error when use --help", async () => {
    let error = null;
    try {
      await bin()("--help");
    } catch (e) {
      error = e;
    }

    expect(error).toBe(null);
  });

  it("show correct version", async () => {
    const { stdout } = await bin()("-V");
    expect(stdout).toEqual(require("../package.json").version);
  });

  it("open debug mode", async () => {
    let error = null;
    try {
      await bin()("--debug");
    } catch (e) {
      error = e;
    }
    expect(error.message).toContain("launch debug mode");
  });
});
