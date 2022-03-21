FROM node:14.19-alpine3.14

# Current Dir
WORKDIR /frontend

# Dependencies
ENV PATH /frontend/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# App
COPY . ./
EXPOSE 3000

# Run
# CMD [ "npm", "start" ]