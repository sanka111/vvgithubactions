FROM node:20-alpine

WORKDIR /app

# Copy only package files first for better caching
COPY app/package*.json ./
RUN npm ci --omit=dev

# Copy app source
COPY app/ ./

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
