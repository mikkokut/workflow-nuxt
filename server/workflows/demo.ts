import say from "../utils/say";

export async function demo() {
  "use workflow";

  await step();
}

export async function step() {
  "use step";

  say();
}
