# Nuxt + Workflow

Reproduction of the inability to utilize shared typescript code in Workflow files.


## Install dependencies

```bash
pnpm install
```

## Run the development server

```bash
pnpm run dev
```

## Start workflow

Navigate to `http://localhost:3000/api/test`. Instead of "Demo workflow started", you see error:

```
Unknown file extension ".ts" for /code/research/workflow-nuxt/server/utils/say.ts
```
