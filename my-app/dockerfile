FROM node:22-alpine

WORKDIR /my-app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]
