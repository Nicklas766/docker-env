Note: lots of problems with MongoDB with Windows.


If you want to change the volume for the mongodb data:
```
volumes:
      - "/mongodata:/data/db"
```

## Development
The `docker-compose.yml` will create volumes containing the `node_modules`, so you only have to do the following:
```
docker-compose up -d
```

## Production

```
docker-compose -f docker-compose.prod.yml up -d
```



https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds