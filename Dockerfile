FROM node:14.17

ENV API_BROWSER_URL=/

WORKDIR /app

COPY ./ ./

RUN npm install
RUN npm run build

CMD npm run start
