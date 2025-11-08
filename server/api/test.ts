import { start } from 'workflow/api';
import { defineEventHandler } from 'h3';
import { demo } from "../workflows/demo";

export default defineEventHandler(async (event) => {
  // Works because of nuxt auto imports
  say('Hello from Event Handler');

  // Executes asynchronously and doesn't block your app
  await start(demo, []);

  return {
    message: "Demo workflow started",
  };
});
