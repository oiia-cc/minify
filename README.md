Datatabase Schema

Cấu trúc folder backend đề xuất
server/
├── src/
│   ├── api/                     # phần Web API (Express)
│   │   ├── controllers/         # controller xử lý request
│   │   ├── routes/              # định nghĩa route
│   │   ├── middlewares/         # middleware (auth, error, rate-limit,…)
│   │   └── validators/          # schema validate request (Joi / Zod / custom)
│   │
│   ├── services/                # business logic, xử lý nghiệp vụ
│   │   ├── fileService.js       # logic file (upload, metadata, version)
│   │   ├── userService.js       # logic user
│   │   └── notificationService.js
│   │
│   ├── models/                  # mô hình DB (Postgres) — ORM / query builder hoặc repository
│   │   ├── userModel.js
│   │   ├── fileModel.js
│   │   ├── versionModel.js
│   │   ├── jobModel.js
│   │   └── notificationModel.js
│   │
│   ├── queue/                   # phần queue / job producer
│   │   ├── producers/            # code push job vào queue
│   │   │   └── fileProducer.js
│   │   └── queueConfig.js        # cấu hình BullMQ / Redis
│   │
│   ├── worker/                   # mã chạy trong process worker
│   │   ├── processors/           # các processor job (task cụ thể)
│   │   │   ├── fileProcessor.js  # xử lý dedup, virus scan, optimize...
│   │   │   └── versionProcessor.js
│   │   └── worker.js             # entry point worker (nhận job từ queue)
│   │
│   ├── notifications/            # logic tạo thông báo, xử lý noti
│   │   └── notificationHandler.js
│   │
│   ├── config/                    # cấu hình môi trường, biến môi trường
│   │   └── index.js
│   │
│   ├── loaders/                   # khởi tạo các thành phần (DB, queue, storage,…)
│   │   ├── dbLoader.js
│   │   ├── queueLoader.js
│   │   └── storageLoader.js
│   │
│   ├── utils/                      # helper / util chung
│   │   ├── logger.js
│   │   ├── hashUtil.js
│   │   └── errorUtil.js
│   │
│   ├── events/                     # event handlers nếu dùng event-driven
│   │   └── jobEvents.js
│   │
│   └── app.js                      # khởi tạo Express app
│
├── tests/                          # test unit / integration
│   ├── api/
│   ├── services/
│   └── worker/
│
├── scripts/                        # script tiện ích / migration / seed / cleanup tmp
│   ├── cleanTmp.js
│   └── migrate.js
│
├── .env                             # biến môi trường
├── package.json
└── README.md

🔍 Giải thích ý nghĩa các folder / file

src/api: nơi định nghĩa tất cả route HTTP / REST API.

controllers: xử lý request từ client, gọi service.

routes: định nghĩa url + route, route map tới controller.

middlewares: như auth (JWT), error handler, rate-limit,…

validators: validate data đầu vào (upload, metadata…).

src/services: logic nghiệp vụ. Ví dụ: phân biệt khi upload file, logic dedup, logic version, logic notification.

src/models: layer dữ liệu, mô hình DB (Postgres). Có thể dùng ORM hoặc query builder.

src/queue: phần producer job đưa task vào queue BullMQ.

producers/: mã để push job.

queueConfig.js: cấu hình Redis, BullMQ (connection, số queue, concurrency…).

src/worker: code chạy độc lập để xử lý job queue.

processors/: các processor job (ví dụ fileProcessor làm dedup, virus scan …).

worker.js: entry point worker.

src/notifications: logic tạo noti sau khi job hoàn thành, hoặc lỗi.

src/config: config biến môi trường (database URL, Redis URL, bucket storage…), cấu hình chung.

src/loaders: khởi tạo kết nối khi ứng dụng khởi động (bật queue, kết nối DB, storage, logger…).

src/utils: helper, util dùng chung như log, hash, error xử lý.

src/events: nếu bạn dùng event-driven hoặc muốn xử lý event từ queue hay DB, các handler event nằm đây.

tests: viết test unit / integration cho API, service, và worker.

scripts: scripts hỗ trợ như dọn file tmp, migration DB, seed dữ liệu.

1) Flow xử lý upload file qua các folder / file (theo kiến trúc Web-Queue-Worker)

Giả sử bạn có cấu trúc folder như sau (giống đề xuất trước):

src/
  api/
    controllers/
      fileController.js
    routes/
      fileRoutes.js
  services/
    fileService.js
  queue/
    producers/
      fileProducer.js
    queueConfig.js
  worker/
    processors/
      fileProcessor.js
    worker.js
  models/
    fileModel.js
    versionModel.js
    jobModel.js
  loaders/
    dbLoader.js
    queueLoader.js
    storageLoader.js
  utils/
    hashUtil.js
    logger.js


Dưới đây flow upload + xử lý sẽ đi qua các phần này:

Bước 1: Client gửi file → API server

Frontend (React) gửi request POST /api/v1/files/upload với multipart/form-data chứa file.

API Server (api/routes/fileRoutes.js) định nghĩa route → trỏ tới controller: fileController.upload.

Bước 2: Controller nhận file, lưu tạm và tạo job

Trong fileController.upload, code sẽ:

Kiểm tra auth (middleware)

Dùng service fileService.createTempRecord(...) để tạo record tạm (temp) trong DB (model fileModel.js / versionModel.js)

Lưu file từ body request vào Supabase Storage tmp (hoặc local / bộ nhớ tạm) thông qua loader storage (qua storageLoader.js)

Sau khi lưu tạm được, gọi producer job: fileProducer.addProcessJob(data) (nằm trong queue/producers/fileProducer.js).

Bước 3: Producer push job vào queue

fileProducer.addProcessJob(...) dùng queueConfig.js (cấu hình BullMQ) để tạo queue connection tới Redis, và thêm job vào queue. Payload job chứa thông tin như tempFileId, userId, tên file, path tmp v.v.

Bước 4: Worker lấy job và xử lý

Worker (process độc lập) chạy file worker/worker.js. Khi khởi, nó khởi queue consumer BullMQ, đợi job.

Khi có job mới, worker.js dispatch tới processor tương ứng (ở worker/processors/fileProcessor.js).

Trong fileProcessor.js, xử lý từng bước:

Lấy file tạm từ Storage (thông qua storageLoader)

Tính hash SHA-256 bằng hashUtil.js

Kiểm tra trùng: dùng service fileService.checkDuplicate(hash) → nếu trùng, lấy file version hiện có, hoặc tạo version mới

Virus scan: nếu phát hiện virus → dừng job, cập nhật DB record phiên bản (file_versions) là virus_failed

Nếu pass virus → compress / optimize ảnh (nếu là ảnh)

Sau khi xử lý xong, worker chuyển file từ tmp sang final path (bằng Storage API)

Cập nhật record file_versions: đường dẫn mới, kích thước, trạng thái completed, version_number, hash, v.v

Ghi audit log (qua service audit hoặc audit_logs model)

Tạo notification (lưu vào bảng notifications, hoặc push event) để frontend biết job hoàn thành.

Bước 5: Worker phát sự kiện tiến trình / hoàn thành

Trong khi xử lý, fileProcessor có thể báo tiến trình (progress) qua BullMQ progress API (BullMQ hỗ trợ job “progress”) → worker gọi job.updateProgress(...).

Ngoài ra, sau khi xong hoặc lỗi, worker có thể emit event (qua QueueEvents của BullMQ) hoặc update bảng jobModel / notification table.

Nếu dùng Supabase Realtime: backend (API hoặc worker) sau khi cập nhật notification hoặc file_versions.status → bảng DB thay đổi → Supabase Realtime sẽ đẩy event đến frontend.

Bước 6: Frontend cập nhật UI

Frontend (React) lắng nghe realtime (SSE hoặc Supabase Realtime) để nhận thông báo: job đã hoàn thành, file mới đã ready, hoặc lỗi.

Khi nhận event “complete”: React Query hoặc Zustand cập nhật state — thêm file mới vào list, hiển thị thông báo cho user.

2) Mô hình luồng dữ liệu (Data Flow)
Client → API Server (upload) → Controller → Service → Storage Loader (tmp)  
         → fileProducer → Queue (Redis / BullMQ)  
         → Worker → Processor (fileProcessor) → Hash / Virus / Optimize → Storage final  
         → DB cập nhật (version, status) + Notification + AuditLog  
         → Realtime event → Frontend


API Server chịu phần nhận file và push job.

Queue (BullMQ + Redis) làm cầu nối giữa web và worker.

Worker thực hiện logic nặng.

Storage Loader xử lý lưu file tạm & final.

DB lưu metadata, trạng thái, version, log.

Realtime (Supabase Realtime hoặc Job Events) dùng để frontend nhận cập nhật.

3) Tại sao flow này tốt (liên kết với best practice)

Theo kiến trúc Web-Queue-Worker (mô hình Azure architecture style): web front end push công việc bất đồng bộ, worker xử lý tốn tài nguyên / lâu, database dùng để lưu kết quả. 
Microsoft Learn

Sử dụng BullMQ cho việc xử lý job: BullMQ là thư viện queue mạnh, phổ biến cho Node.js + Redis, hỗ trợ progress, retry, rate-limit, batch, v.v. 
bullmq.io
+1

Tách rõ trách nhiệm: API server không bị block bởi scan / compress, worker xử lý các phần nặng → hệ thống phản hồi nhanh và ổn định.

Sử dụng Redis + BullMQ cũng cho phép scale worker độc lập khi cần (nhiều worker để xử lý nhiều job khi upload nhiều).