import router from 'express';

const routes = router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

export default routes;
