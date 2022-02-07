FROM node:14.17.6-alpine AS base-node
WORKDIR /build
COPY ./package.json .
RUN yarn

FROM base-node AS build
COPY . .
RUN yarn build

FROM base-node as production
WORKDIR /app
COPY --from=build /build/ormconfig.js ./ormconfig.js
COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules
# RUN node ./node_modules/typeorm-seeding/dist/cli.js seed
CMD [ "node", "./dist/main.js" ]

EXPOSE 8080
ENV PORT 8080