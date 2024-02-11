# DENO-API

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://www.typescriptlang.org/)
[![deno compatibility](https://shield.deno.dev/deno/1.40.4)](https://deno.com)
![GitHub Repo Size](https://img.shields.io/github/repo-size/gonzaloplaza/express-ts-ddd)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Simple JSON REST API built with Deno JavaScript Runtime (https://deno.com) and
Hono Framework 4.0 (https://hono.dev).

## Installation

Install Deno Runtime
(https://docs.deno.com/runtime/manual/getting_started/installation)

```bash
curl -fsSL https://deno.land/install.sh | sh

# Update your .bashrc profile
export DENO_INSTALL="/home/your_username/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

deno info
deno --version
```

Copy `.env.example` content to `.env`

### Run dev server (watch file changes)

```bash
deno task dev
```

### Run production server

```bash
deno task serve
```

### Run tests

```bash
deno test
```

### Run on Docker

```sh
docker build --no-cache -t deno-api .

docker run --rm -it -p 3000:3000 --name deno-api deno-api
```
