
# Graphql-Auth
## Description
This project provides an authentication service implemented using GraphQL, PostgreSQL, and Node.js with TypeScript. It uses Docker for containerization, Prisma for database management, and offers a GraphQL endpoint for user management and authentication.

## Technologies Used
- **Node.js**: avaScript runtime for server-side logic.
- **TypeScript**: Adds static typing to JavaScript.
- **GraphQL**: Query language for APIs.
- **PostgreSQL**: Relational database management system.
- **Prisma**: ORM for managing database schema and queries.
- **Docker**: Containerization platform for running PostgreSQL.
## Getting Started

### Prerequisites

- Node JS 18.x
- npm 10.x or yarn
- docker


### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/dharayush7/graphql-auth.git
cd graphql-auth
```
#### 2. Setup Environment Variables:
Create a .env file in the root directory of the project with the following contents:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/auth
PORT= // any port you want to listen the server without 5432
```
  - **DATABASE_URL**: Connection string for the PostgreSQL database.
  - **PORT**:  Port number where the server will run. The default port is `8000`.


#### 3. Start PostgreSQL with Docker Compose:

PostgreSQL can be started using the Docker Compose configuration already provided in the project.

```
docker-compose up -d
```

#### 4. Install Dependencies:

```
npm start
```

#### 5. Run Migrations:
Apply Prisma migrations to set up the database schema:
```
npx prisma migrate deploy
```

#### 6. Start the Server:

```
npm start
```
The server will start and listen on the port specified in the .env file. By default, it will use port `8000` if no port is specified.

## Usage:

### GraphQL Endpoint:
Once the server is running, you can access the GraphQL API at:

```
http://localhost:PORT/graphql
```


Replace `PORT` with the port number specified in the `.env` file.

### Authentication Operations:
You can perform the following operations via GraphQL:

1. **Create User**:


 Mutation for creating a new user:
 ```graphql
   mutation {
     createUser(data: { 
         firstName: "userName",
         lastName: "userLastName",
         email: "user@example.com", password: "password" }) {
       id
       email
     }
   }
   ```


2. **Log In User**

   Mutation for logging in a user and receiving a token:

   ```graphql
   mutation {
     getUserToken(email: "user@example.com", password: "password") {
       token
     }
   }
   ```

3. **Verify Token**

   Query to verify the provided token:

   ```graphql
   query {
     getCurrentLoggedinUser(token: "your-jwt-token") {
       valid
       user {
         id
         email
       }
     }
   }
   ```

The `verifyToken` query will return whether the token is valid and the associated user information.

## Directory Structure:
- `src/`: Contains source code for the application.
- `prisma/`: Prisma schema and migration files.
- `docker-compose.yml`: Docker Compose configuration for PostgreSQL.
- `.env`: Environment variables for database URL and server port.

## Notes:

- Ensure that your `DATABASE_URL` in the `.env` file matches the PostgreSQL connection details.
- Prisma migrations are required to initialize the database schema. Run `npx prisma migrate deploy` whenever you make changes to the schema.

## 🔗 Links
[portfolio](https://www.ayushdhar.com/)



## License

[MIT]

