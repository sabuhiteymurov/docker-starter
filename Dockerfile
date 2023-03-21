FROM node:lts-alpine

WORKDIR /app-folder

COPY app/ .

RUN npm install

RUN npm run build

CMD ["npm", "start"]
