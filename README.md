A complete Full-Stack App based on MERN stack built as part of John Smilga's MERN Stack Course - MongoDB, Express, React and NodeJS

https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/

First setup of the project (if no pnpm installed, will install pnpm first):
npm run setup-project

pnpm run:
"setup-project": "npm install -g pnpm && pnpm install && cd client && pnpm install",
"setup-production-app": "pnpm install && cd client && pnpm install && pnpm run build",
"server": "nodemon server.js",
"client": "cd client && pnpm run dev",
"dev": "concurrently --kill-others-on-fail \"pnpm run server\" \"pnpm run client\""
