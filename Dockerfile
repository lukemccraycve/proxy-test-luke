FROM node:20-alpine
COPY . /app
CMD cd /app && node index.js