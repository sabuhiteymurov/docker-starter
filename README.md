# Docker 101

## Basic Docker Commands

+ ```docker ps``` for listing running containers
+ ```docker pull <image>:<tag>``` for downloading image
+ ```docker run -t -d --name <name> <image>:<tag>``` create a container that allocates pseudo terminal and with given name
+ ```docker exec -it <name> <command>``` login to container

### RULE #1 
you can not bind ports after creation of container

## Dockerfile

For creating images form

```docker
FROM node:lts-alpine

WORKDIR /app-folder

COPY app/ .

RUN npm install

RUN npm run build

CMD ["npm", "start"]
```

```
docker build -t <desired_image_name>:<tage> .
```

## docker-compose

```docker
version: '3.8'
services: 
    react-app:
      build: .
      container_name: test
      ports:
        - 3000:3000
```

```bash
docker compose up
```