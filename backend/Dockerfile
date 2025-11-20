FROM node:20-alpine

WORKDIR /app

# copy package manifests and install dependencies
COPY package*.json ./
RUN npm ci --silent

# copy source
COPY . .

EXPOSE 4000

# Run the dev server by default for local development
CMD ["npm", "run", "dev"]
