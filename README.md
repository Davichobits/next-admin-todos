# Admin Todos
## Getting Started

First, run the development server:

```bash
npm run dev
```

## Docker postgres db

To run a PostgreSQL database in Docker, you can use the following command:

```bash
docker compose up -d
```

## Prisma
To set up Prisma, you need to run the following commands: 

```bash
npx prisma init
```
Create a migration file:

```bash
npx prisma migrate dev --name init
```

Generate the Prisma client:

```bash
npx prisma generate
```

## Environment Variables 

Rename the .env.example file to .env and set the environment variables accordingly. 

## Seeding the Database
[To seed the database](localhost:3000/api/seed), you can run the following command: