import { start } from 'workflow/api';
import { defineEventHandler } from 'h3';
import { demo } from "../workflows/demo";

export default defineEventHandler(async (event) => {

  // Executes asynchronously and doesn't block your app
  await start(demo, []);

  return {
    message: "Demo workflow started",
  };
});
