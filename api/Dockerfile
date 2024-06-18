#use the official node image
FROM node:latest

#set the working directory
WORKDIR /usr/src/app

#copy the package.json file
COPY package*.json ./

#install the dependencies
RUN npm install

#copy the rest of the files
COPY . .

#expose the port
EXPOSE 3000

#run the app
CMD npm run typeorm migration:run && npm run dev
