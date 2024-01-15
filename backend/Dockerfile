# Use an official Node runtime as a parent image
FROM node:18

COPY . /usr/src/app/backend

# Set the working directory in the container
WORKDIR /usr/src/app/backend

# Install any needed packages specified in package.json
RUN npm install -g pnpm
RUN pnpm install

# Make port available to the world outside this container
EXPOSE 9002

# Run index.js when the container launches
CMD ["node", "index.js"]
