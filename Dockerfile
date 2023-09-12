FROM node:18-alpine

WORKDIR /user/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install --production

# Copy the built TypeScript code to the container
COPY dist ./dist

EXPOSE 3333

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
