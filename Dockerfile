FROM node:latest
WORKDIR /app
# /home/ekaterina/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js" ]