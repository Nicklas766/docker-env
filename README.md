Note: lots of problems with MongoDB with Windows.


If you want to change the volume for the mongodb data:
```
volumes:
      - "/mongodata:/data/db"
```

## Development
Note that it'll take quite a while the first time, due to having to build images.

* The `docker-compose.yml` will create volumes containing the `node_modules`.
* A volume named `mongodata` will be created/used for persisting mongodb data.
```
docker-compose up -d
```

## Production
```
docker-compose -f docker-compose.prod.yml up -d
```

## Note
The backend uses a subdomain like `backend.localhost`, works fine in chrome but might require changing settings in firefox and ie.

[Read this if you use firefox](https://stackoverflow.com/questions/33251155/firefox-cannot-connect-to-a-local-servers-subdomain/56049681)



https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds