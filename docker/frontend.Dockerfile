FROM node:16
WORKDIR /app
COPY frontend/ .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]