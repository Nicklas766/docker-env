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



https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds