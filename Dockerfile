# Use the official Node 16 image as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn) to the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the local src directory to the container
COPY . .

# Specify the command to run on container start
CMD ["npm", "run", "dev"]
