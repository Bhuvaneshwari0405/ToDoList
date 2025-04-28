FROM node:23
WORKDIR /app
COPY src/ .
RUN npm install
EXPOSE 3000
CMD ["node", "src/app.js"]