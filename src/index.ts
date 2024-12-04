import { connect } from 'mongoose';
import App from './app';
import { createServer } from 'http';

const PORT = process.env.PORT || 3001;

// main db connecion
connect("mongodb://mongo-3:27017/app1")
    .then(async () => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('error', err);
    })
.then(async () => {
    App.set('port', PORT);

    const server = createServer(App);

    server.listen(PORT).on('listening', () => {
    console.log(`Listening on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('err', err);
});
