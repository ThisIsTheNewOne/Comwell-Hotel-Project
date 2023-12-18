FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm install
COPY . .

#  Build your app (if necessary)
RUN npm run build
RUN ls -la  # Add this line to list files in /app
# Step 7: Start the app with a minimal node image
FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules 
 

CMD ["npm", "start"] 