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
```
docker-compose up -d
```

Open: http://localhost
Open: http://backend.localhost

### Production
Edit the `docker-compose.prod.yml` and `docker/prod/*` as you see fit for production.
```
docker-compose -f docker-compose.prod.yml up -d
```
