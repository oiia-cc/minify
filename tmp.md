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