# Stage 1: Build the React application
FROM node:18 
COPY . /usr/src/app/frontend
WORKDIR /usr/src/app/frontend
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

WORKDIR /usr/src/app/frontend
EXPOSE 9009
CMD ["node", "server.js"]
