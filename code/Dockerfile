FROM node:20

RUN mkdir app
WORKDIR /app

COPY . .
RUN npm install && npm run build
EXPOSE 8080


CMD ["node", "dist/app.js"]