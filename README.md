This project uses:
* React
* Express
* MongoDB (with mongoose)

## Running the app
⚠️ Backend uses a subdomain, `backend.localhost`. It works fine in Chrome but might require changing settings in firefox and ie. [Read this if you use firefox](https://stackoverflow.com/questions/33251155/firefox-cannot-connect-to-a-local-servers-subdomain/56049681).


### Development
Dev mode uses nodemon for the backend and hot reloading for the frontend.

Create `.env`:
```
HOST=localhost
MODE=dev
```

Then:
```
docker-compose up -d
```

Open: http://localhost

Open: http://backend.localhost

### Production
Create `.env`:
```
HOST=example.com
MODE=prod
```

Then:
```
docker-compose up -d
```
