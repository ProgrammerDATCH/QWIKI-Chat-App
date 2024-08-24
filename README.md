## Video Record:

- Create config.yaml

``` bash
nano ~/livekit-egress/config.yaml
```

Contents: 
``` javascript 
log_level: debug
api_key: devkey
api_secret: secret
ws_url: ws://172.17.0.1:7880
insecure: true
redis:
  address: 172.17.0.1:6379

```


- Download Image

``` bash
 docker run --rm \
  --cap-add SYS_ADMIN \
  -e EGRESS_CONFIG_FILE=/out/config.yaml \
  -v ~/livekit-egress:/out \
  livekit/egress
```

- Install Redis:
``` bash
    sudo apt update
    sudo apt install redis-server
```

- Change Redis bind from `bind 127.0.0.1` to `bind 0.0.0.0` AND from `protected-mode yes` to `protected-mode no`

```bash
sudo nano /etc/redis/redis.conf
```

- Restart Redis
```bash
sudo systemctl restart redis-server
```

- View IP to use in Docker || Mosly is `172.17.0.1:6379`. Then update config.yaml
```bash
ip addr show docker0 | grep inet
```

- Then run
``` bash
docker run --rm   --cap-add SYS_ADMIN   -e EGRESS_CONFIG_FILE=/out/config.yaml   -v ~/livekit-egress:/out   livekit/egress
+ rm -rf '/home/egress/tmp/*'
```