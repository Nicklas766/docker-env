This project uses:
* React
* Express
* MongoDB (with mongoose)

## Running the app
⚠️ Backend uses a subdomain, `backend.localhost`. It works fine in Chrome but might require changing settings in firefox and ie. [Read this if you use firefox](https://stackoverflow.com/questions/33251155/firefox-cannot-connect-to-a-local-servers-subdomain/56049681).


### Development
Use this if you want to use:
* the backend and frontend as volumes.
* nodemon for the backend.
* hot reloading for the frontend.

`.env`
```
HOST=localhost
MODE=dev
FRONTEND_BIND_MOUNT=./frontend/:/app
BACKEND_BIND_MOUNT=./backend/:/app
CACHED_NODE_MODULES=/app/node_modules
HOTRELOAD=true
```

```
docker-compose up -d
```

Open: http://localhost

Open: http://backend.localhost

### Production
`.env`
```
HOST=localhost
MODE=prod
FRONTEND_BIND_MOUNT=
BACKEND_BIND_MOUNT=
CACHED_NODE_MODULES=
HOTRELOAD=false
```
```
docker-compose up -d
```
