# A Small upload image system with backgound process, virus scan, check duplicate, versioning, notifications

## Features
- JWT authentication
- RBAC (Admin, User)
- Admin manages files and users
- Users manages their files

## Upload pipeline
1. client sends file to server
2. Server checks permissons of user
3. Server uploads to tmp on Supabase, update metadata in Database
4. Server runs another process in background to: Scan virus, deduplicate, compress,  move the file to final bucket and update database
- While uploading, user can see progress
5. Server sends an notification to user

## TeckStack
### Client:
- Vite + React
- Zustand (UI state)
React Query (server state)
- SSE(Real-time notifications)

### Server
- Node.JS + Express
- Prisma ORM
- NullMQ (background jobs)
- SSE (push real-time events)

### Storage & Database
- Supabase Storage (save image data)
- PostgreSQL (Supabase)
- Upstash Redis (Pub/Sub + queue backend)

### Deploy: 
- Vercel
- Render 

## Backend architecture:
- Queue-Worker-Server

## Folder Structure


## Dev Setup
0. Install Redis local by run in Docker command: 
`docker run --name redis -dp 6379:6379 redis`
1. Create file `.env.development` in `/server`
```
NODE_ENV=development
SUPABASE_URL=
DATABASE_URL=
SUPABASE_SERVICE_KEY=
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
PORT=
```
2. Run `npm install && npm run dev`  in /client to install dependencies and run client
3. Run `npm install && npm run dev && npm run worker` in /server to install dependencies and run server, worker


