import say from "../../server/utils/say";

export async function demo() {
  "use workflow";

  say('Hello from workflow');

  await step();
}

export async function step() {
  "use step";

  say('Hello from step');
}
