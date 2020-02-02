This project uses:
* React
* Express
* MongoDB (with mongoose)

## Running the app
⚠️ Backend uses a subdomain, `backend.localhost`. It works fine in Chrome but might require changing settings in firefox and ie. [Read this if you use firefox](https://stackoverflow.com/questions/33251155/firefox-cannot-connect-to-a-local-servers-subdomain/56049681).


### Development
For the development environment we use the backend and frontend as bind mounts, nodemon for the backend, and hot reloading for the frontend.

Create `.env`:
```
HOST=localhost
MODE=dev
FRONTEND_BIND_MOUNT=./frontend/:/app
BACKEND_BIND_MOUNT=./backend/:/app
CACHED_NODE_MODULES=/app/node_modules
HOTRELOAD=true
```
Then:
```
docker-compose build
docker-compose up -d
```

Open: http://localhost

Open: http://backend.localhost

### Production
⚠️ The variables that are empty, **must be empty or undefined**, else Docker will think it couldn't find them. ⚠️ 

Create `.env`:
```
HOST=localhost
MODE=prod
FRONTEND_BIND_MOUNT=
BACKEND_BIND_MOUNT=
CACHED_NODE_MODULES=
HOTRELOAD=false
```
Then:
```
docker-compose build
docker-compose up -d
```
