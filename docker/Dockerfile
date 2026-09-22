FROM node:16-bullseye-slim

WORKDIR /usr/src/app

# Install production dependencies
COPY app/package*.json ./
RUN npm install --production --no-cache

# Copy application source
COPY app/ .

# Enforce least privilege by running as non-root user
RUN chown -R node:node /usr/src/app
USER node

ENV PORT=4000
ENV NODE_ENV=development

EXPOSE 4000

CMD ["npm", "start"]

#