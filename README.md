* Upload ảnh lên supabase
* Chức năng:
- JWT authentication
- RBAC
- Upload file ảnh, check trùng lặp, nén, quét virus
- Admin quản lý users, files
- Users quản lí files của mình

* Công nghệ:
- Client: Vite, REACT, Zustand, React query
- Server: JavaSript, Express, Node.JS
- DB: PostgreSQL (Supabase) + Prisma, Redis(Upstash)
- Queue and event: BullMQ, SSE
- Vercel, Railways

* Kiến trúc Backend:
- Queue-Worker-Server