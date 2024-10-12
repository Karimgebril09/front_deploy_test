FROM node:18 AS buildingstage  

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY ./nginxConfigs/default.conf /etc/nginx/conf.d/default.conf

COPY --from=buildingstage /app/build /usr/share/nginx/html

## i prefered this for more security than predoing it and pushing it to the repo
WORKDIR /etc/nginx/dhparam 

RUN openssl dhparam -out dhparam-2048.pem 2048

EXPOSE 80
EXPOSE 443
