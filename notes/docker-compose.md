---
date: 2025-01-25T18:25
date_updated: 2025-01-25T19:10
tags:
  - Cheat-sheet
  - PostgreSQL
  - Docker
title: Docker compose cheat sheet
cover_image: /public/img/cover_images/docker.gif
cover_image_alt: La mascotte Docker redessinée par mes soins
---

```shell
docker compose up -d
docker compose up --build
docker compose down
docker compose down --rmi all --volumes
```

## PostgreSQL

```yml
version: '3.9'

services:

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_USER: postgres
      POSTGRES_DB: dev
    ports:
      - "5432:5432"

```


