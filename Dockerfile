# Build stage container
FROM node:8.7-alpine AS build

WORKDIR /app

COPY . /app

RUN ["./build.sh"]

# Compose final container
FROM node:8.7-alpine

WORKDIR /app

COPY --from=build /app/server /app

EXPOSE 3000

CMD ["yarn", "start"]
