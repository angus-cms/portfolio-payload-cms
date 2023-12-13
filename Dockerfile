FROM node:18-alpine as base

FROM base as builder

WORKDIR /home/node
COPY package*.json ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node
COPY package*.json  ./

COPY --from=builder /home/node/dist ./dist
COPY --from=builder /home/node/build ./build
COPY --from=builder /home/node/start.sh ./start.sh

EXPOSE 3000

CMD /bin/sh start.sh