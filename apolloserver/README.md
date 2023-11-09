# Apollo Server
------------------
### Instalation
#### DB
Database diagrams is available in the next link [DB_diagram]

Create a ".env" file and add the properly values so the app can connect to the DB on the warehouse schena
```
DB_URL=postgresql://user:password@server:5432/database?schema=warehouse
```
Create Tables and add default values
```
npx prisma generate
npx prisma migrate dev
npx ts-node prisma/seeds.ts
```


[DB_diagram]: <https://dbdiagram.io/d/654506717d8bbd64656f7d4e>