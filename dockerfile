FROM node:21-alpine
RUN mkdir /vite_app
ENV api_url = ""
COPY . ./vite_app
WORKDIR /vite_app
RUN npm i
EXPOSE 3100
CMD ["npm","run","dev"]