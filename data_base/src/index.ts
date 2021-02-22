import "reflect-metadata";
import {createConnection} from "typeorm";
import {UserSome} from "./entities/UserSome";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new UserSome();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(UserSome);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));

// psql -d db_postgres
// npm run typeorm -- migration:generate -n migration_name

// docker run -p 5432:5432  --name db_postgres -e POSTGRES_PASSWORD=ekaterina -d postgres
// docker run -p 5050:80  -e "PGADMIN_DEFAULT_EMAIL=ekaterina@mail.ru" -e "PGADMIN_DEFAULT_PASSWORD=ekaterina"  -d dpage/pgadmin4
// docker run -p 5050:80 --link db_postgres -e "PGADMIN_DEFAULT_EMAIL=ekaterina@mail.ru" -e "PGADMIN_DEFAULT_PASSWORD=ekaterina" -d dpage/pgadmin4
// docker run --name db_postgres -e POSTGRES_PASSWORD=ekaterina -d postgres

// postgres:
// 	docker rm $(APP_NAME)_postgres || true

	// docker run --rm \
	// --name db_postgres \
    // --network hibrain_backend_new_api_docker \
	// -p 5432:5432 \
    // -v $HOME/docker/volumes/postgres:/docker-entrypoint-initdb.d \
	// -d postgres:12.1-alpine || true
// 		-e POSTGRES_MULTIPLE_DATABASES=hibrain_backend_new_api_service \



// docker run --rm \
// --name db_pgadmin \
// --network hibrain_backend_new_api \
// -e PGADMIN_DEFAULT_EMAIL=ekaterina@mail.ru -e PGADMIN_DEFAULT_PASSWORD=ekaterina \
// -p 5050:80 \
// -d dpage/pgadmin4 || true

// APP_NAME=hibrain_backend_new_api


// docker run -p 5050:80 --link db_postgres_app -e "PGADMIN_DEFAULT_EMAIL=ekaterina@mail.ru" -e "PGADMIN_DEFAULT_PASSWORD=ekaterina" -d dpage/pgadmin4
// c6d55f28a091442ea829005aec8246fa0cd1c3fdfd42ee56e0ffe349600a2214


// docker run -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data --name db_postgres_app -e POSTGRES_USER=ekaterina -e POSTGRES_PASSWORD=ekaterina -d postgres




