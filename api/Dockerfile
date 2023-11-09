# Use latest version of node v8
FROM node:current-alpine

#create an app directory
RUN mkdir /app
#make /app as the working directory
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install -d
COPY config/ /app/config/
COPY dist/ /app/dist/
RUN chown -R 0777 .
#expose default port of the docker to 3000
EXPOSE 3000

#runs this command when the container is created, can be overriden in the docker-compose.yml
CMD ["npm", "run", "serve"]
