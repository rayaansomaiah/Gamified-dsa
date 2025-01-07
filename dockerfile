 # Use a Node.js image for building the frontend
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the frontend
RUN npm run build

# Use a lightweight web server to serve the frontend
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]