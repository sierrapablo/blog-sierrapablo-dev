# STAGE 1: BUILD
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# STAGE 2: RUNTIME
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app
RUN npm ci --omit=dev
EXPOSE 5173
CMD ["node", "server.js"]
