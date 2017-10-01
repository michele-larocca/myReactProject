import express from 'express';
import sleep from 'system-sleep';

const services = express();

const defaultMessages = [
    {id: 'sss1', text: 'Example Server Message 1', date: new Date()},
    {id: 'sss2', text: 'Example Server Message 2', date: new Date()},
    {id: 'sss3', text: 'Example Server Message 3', date: new Date()}
];

services.get('/rest/getDeafaultMessages', (request, response) => {
    sleep(5000);
    response.send(defaultMessages);
});

services.listen(8080, () => console.log('Server in esecuzione sulla porta 8080...'));