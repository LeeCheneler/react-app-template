# Build stage container
FROM node:8.2.0-alpine AS app-build

WORKDIR /app  

COPY /app /app  

RUN ["yarn", "install"] 
RUN ["yarn", "build"]

# Compose final container
FROM node:8.2.0-alpine

WORKDIR /app

COPY /server /app
COPY --from=app-build /app/dist /app/public

RUN ["yarn", "install"]

EXPOSE 3000  

CMD ["yarn", "start"]
