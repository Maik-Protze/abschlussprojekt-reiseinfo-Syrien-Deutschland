FROM node:20-alpine

WORKDIR /app

# copy package manifests and install dependencies
COPY package*.json ./
RUN npm ci --silent

# copy source files
COPY . .

EXPOSE 5173

# Start Vite dev server and bind to host so it's reachable from outside the container
CMD ["npm", "run", "dev", "--", "--host"]
