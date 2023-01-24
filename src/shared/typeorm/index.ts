import { createConnection } from 'typeorm';

createConnection(); //create connection with database and entities based on ormconfig.json
//docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
