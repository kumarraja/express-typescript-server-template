import App from './app';
import PostsController from './posts/posts.controller';
 
const app = new App(
  [
    new PostsController(),
  ],
  5000,
);
 
app.listen();



// import * as express from 'express';
// import * as bodyParser from 'body-parser';

// function loggerMiddleware(request: express.Request, response: express.Response, next) {
//     console.log(`${request.method} ${request.path}`);
//     next();
// }

// const app = express();

// const router = express.Router();



// app.use(loggerMiddleware);
// app.use(bodyParser.json());
// app.use('/api', router);

// app.get('/', (request, response) => {
//     response.send('Welcome to Home page');
// });
// app.get('/hello', (request, response) => {
//     response.send('Hello world!');
// });
// app.post('/bodyparser', (request, response) => {
//     response.send(request.body);
// });

// router.get('/hello', (request, response) => {
//     response.send('Hello world! this is from router api');
// });


// app.listen(5000);