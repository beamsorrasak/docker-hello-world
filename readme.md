# Docker Hello World

Just hello world web app run in container for basic learning.

## Option

- Change value in "config.js" for test get value from config file at route /config.
- Assign docker environment `-e SHOW_TEXT=[value]` for test value environment in hello world page.

## How to run

Build docker image

```bash
docker build . -t [your docker image name]
```

Run docker image

```bash
docker run -d -p 3000:3000 [your docker image name]
```

Access hello world app

```bash
http://localhost:3000
```
