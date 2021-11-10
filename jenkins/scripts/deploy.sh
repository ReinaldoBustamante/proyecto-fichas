#!/usr/bin/env sh

echo 'Moving artifacts to /home/vps218/www'


set -x
cp build/** /home/vps218/www/
ls /home/vps218/www
echo 'Kill container'
docker kill fedent-implementacion
echo 'Serve build'
docker run -dit --name fedent-implementacion -p 8081:80 -v /home/vps218/www/:/usr/local/apache2/htdocs/ httpd:2.4
set +x

echo 'Running container'