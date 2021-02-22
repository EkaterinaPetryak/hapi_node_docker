FROM node:latest
WORKDIR /app
# /home/ekaterina/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js" ]

# docker run --rm -p 16500:80 \
# --network pgadmin_docker \
# --name pgadmin4 \
# -e "PGADMIN_DEFAULT_EMAIL=ekaterina@mail.ru" \
# -e "PGADMIN_DEFAULT_PASSWORD=ekaterina" \
# -d dpage/pgadmin4


# это работает
# docker run -p 5050:80  -e "PGADMIN_DEFAULT_EMAIL=ekaterina@mail.ru" -e "PGADMIN_DEFAULT_PASSWORD=ekaterina"  -d dpage/pgadmin4