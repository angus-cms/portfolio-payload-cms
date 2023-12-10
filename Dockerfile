FROM node:18.8-alpine as base

FROM base as install

WORKDIR /home/node/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

FROM base as builder

WORKDIR /home/node/app
COPY --from=install /home/node/app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
