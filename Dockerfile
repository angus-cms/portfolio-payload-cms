FROM  node:18-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./
COPY yarn.lock ./

COPY . .
RUN yarn install
RUN yarn build

FROM base AS runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package.json  ./

COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
COPY --from=builder /home/node/app/start.sh ./start.sh

CMD /bin/sh start.sh