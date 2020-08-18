FROM node:11.15.0-alpine
RUN mkdir /app
WORKDIR /app
COPY /dist /app
CMD ["node", "index.js"]