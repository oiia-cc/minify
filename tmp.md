name: deploy
type: directory
children:
  - name: client
    type: directory
    children:
      - name: public
        type: directory
        children:
          - name: vite.svg
            type: file
            size: null
      - name: src
        type: directory
        children:
          - name: assets
            type: directory
            children:
              - name: react.svg
                type: file
                size: null
          - name: App.css
            type: file
            size: null
          - name: App.jsx
            type: file
            size: null
          - name: index.css
            type: file
            size: null
          - name: main.jsx
            type: file
            size: null
      - name: .gitignore
        type: file
        size: null
      - name: eslint.config.js
        type: file
        size: null
      - name: index.html
        type: file
        size: null
      - name: package-lock.json
        type: file
        size: null
      - name: package.json
        type: file
        size: null
      - name: README.md
        type: file
        size: null
      - name: vite.config.js
        type: file
        size: null
  - name: server
    type: directory
    children:
      - name: prisma
        type: directory
        children:
          - name: schema.prisma
            type: file
            size: null
      - name: scripts
        type: directory
        children: []
      - name: src
        type: directory
        children:
          - name: api
            type: directory
            children:
              - name: controllers
                type: directory
                children:
                  - name: eventController.js
                    type: file
                    size: null
                  - name: fileController.js
                    type: file
                    size: null
              - name: middlewares
                type: directory
                children:
                  - name: errorHandler.js
                    type: file
                    size: null
                  - name: rateLimit.js
                    type: file
                    size: null
                  - name: unknown.js
                    type: file
                    size: null
              - name: routes
                type: directory
                children:
                  - name: eventRoutes.js
                    type: file
                    size: null
                  - name: fileRoutes.js
                    type: file
                    size: null
              - name: validators
                type: directory
                children: []
          - name: cache
            type: directory
            children:
              - name: redisClient.js
                type: file
                size: null
          - name: config
            type: directory
            children:
              - name: index.js
                type: file
                size: null
              - name: loadEnv.js
                type: file
                size: null
              - name: redis.js
                type: file
                size: null
          - name: constants
            type: directory
            children:
              - name: jobNames.js
                type: file
                size: null
          - name: events
            type: directory
            children:
              - name: jobEvents.js
                type: file
                size: null
          - name: loaders
            type: directory
            children:
              - name: dbLoader.js
                type: file
                size: null
              - name: prisma.js
                type: file
                size: null
              - name: queueLoader.js
                type: file
                size: null
              - name: redisLoader.js
                type: file
                size: null
              - name: storageLoader.js
                type: file
                size: null
          - name: prisma
            type: directory
            children:
              - name: runtime
                type: directory
                children:
                  - name: binary.d.ts
                    type: file
                    size: null
                  - name: binary.js
                    type: file
                    size: null
                  - name: edge-esm.js
                    type: file
                    size: null
                  - name: edge.js
                    type: file
                    size: null
                  - name: index-browser.d.ts
                    type: file
                    size: null
                  - name: index-browser.js
                    type: file
                    size: null
                  - name: library.d.ts
                    type: file
                    size: null
                  - name: react-native.js
                    type: file
                    size: null
                  - name: wasm-compiler-edge.js
                    type: file
                    size: null
                  - name: wasm-engine-edge.js
                    type: file
                    size: null
              - name: client.d.ts
                type: file
                size: null
              - name: client.js
                type: file
                size: null
              - name: default.d.ts
                type: file
                size: null
              - name: default.js
                type: file
                size: null
              - name: edge.d.ts
                type: file
                size: null
              - name: edge.js
                type: file
                size: null
              - name: index-browser.js
                type: file
                size: null
              - name: index.d.ts
                type: file
                size: null
              - name: index.js
                type: file
                size: null
              - name: package.json
                type: file
                size: null
              - name: query_engine_bg.js
                type: file
                size: null
              - name: query_engine_bg.wasm
                type: file
                size: null
              - name: query-engine-windows.exe
                type: file
                size: null
              - name: schema.prisma
                type: file
                size: null
              - name: wasm-edge-light-loader.mjs
                type: file
                size: null
              - name: wasm-worker-loader.mjs
                type: file
                size: null
              - name: wasm.d.ts
                type: file
                size: null
              - name: wasm.js
                type: file
                size: null
          - name: queue
            type: directory
            children:
              - name: producers
                type: directory
                children:
                  - name: fileProducer.js
                    type: file
                    size: null
              - name: queueConfig.js
                type: file
                size: null
          - name: services
            type: directory
            children:
              - name: file
                type: directory
                children:
                  - name: fileService.js
                    type: file
                    size: null
              - name: notifications
                type: directory
                children:
                  - name: notificationPublisher.js
                    type: file
                    size: null
                  - name: notificationService.js
                    type: file
                    size: null
              - name: eventBus.js
                type: file
                size: null
              - name: eventService.js
                type: file
                size: null
              - name: fileVersionService.js
                type: file
                size: null
          - name: utils
            type: directory
            children:
              - name: errorUtil.js
                type: file
                size: null
              - name: hashUtil.js
                type: file
                size: null
              - name: logger.js
                type: file
                size: null
          - name: worker
            type: directory
            children:
              - name: processors
                type: directory
                children:
                  - name: fileProcessor.js
                    type: file
                    size: null
                  - name: optimize.js
                    type: file
                    size: null
                  - name: virusScan.js
                    type: file
                    size: null
              - name: worker.js
                type: file
                size: null
          - name: app.js
            type: file
            size: null
      - name: test
        type: directory
        children: []
      - name: .gitignore
        type: file
        size: null
      - name: index.js
        type: file
        size: null
      - name: package-lock.json
        type: file
        size: null
      - name: package.json
        type: file
        size: null
      - name: prisma.config.js
        type: file
        size: null
      - name: test.js
        type: file
        size: null
      - name: test2.js
        type: file
        size: null
  - name: .gitignore
    type: file
    size: null
  - name: README.md
    type: file
    size: null
isRoot: true
