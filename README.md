# A small upload image system with backgound process, virus scan, check duplicate, versioning, notifications

## Feature
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
### Client
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

### Deploy
- Vercel
- Render 

## Backend architecture
- Queue-Worker-Server

## Folder Structure
```
deploy/
├─ client/
│  ├─ public/
│  ├─ src/
│  ├─ .gitignore
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package.json
│  ├─ README.md
│  └─ vite.config.js
├─ server/
│  ├─ scripts/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ config/
│  │  ├─ constants/
│  │  ├─ events/
│  │  ├─ loaders/
│  │  ├─ queue/
│  │  ├─ services/
│  │  ├─ src/
│  │  ├─ utils/
│  │  └─ app.js
│  ├─ test/
│  ├─ .gitignore
│  ├─ index.js
│  ├─ package.json
│  └─ prisma.config.js
├─ .gitignore
└─ README.md
```

## Dev Setup
0. Install Redis local by runing Docker command: 
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
APP_PORT=
```
2. In `/client` run:
`npm install && npm run dev` to install dependencies and run client
3. In `/server` run:
`npx prisma generate` to create models prisma
4. In `/server` run:
`npm install && npm run dev && npm run worker` to install dependencies and run server, worker


