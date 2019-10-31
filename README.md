# RateThisFood

A full stack food rating web application to rate foods by dishes. 

Click to checkout the video.

[![RateThisFood Video](https://img.youtube.com/vi/h58cI1eNcm0/0.jpg)](https://www.youtube.com/watch?v=h58cI1eNcm0)

## Table of Contents

1. [Requirements](#requirements)

## Requirements
- Node v8.15.x
- MongoDB v4.2.x
- npm v6.10.x

## Development

### Installing Dependencies

From within the root directory

1. Installing project dependencies

```sh
npm install
```
2. To seed the MongoDB database

```sh
node ./database/seedDataBase.js
```
3. To create a client bundle

```sh
npm run build:dev
```

4. To start the server

```sh
npm run start:dev
```
5. To see the fruit of your labors, go to `localhost:3000`

## RESTful CRUD API
Get entree
GET - '/api/rateFood/:category/:foodId' - success: status code 200

Post an image
POST - '/api/rateFood/:category/:foodId/image' - success: status code 200

Post a review
POST - '/api/rateFood/:category/:foodId' - success: status code 200
