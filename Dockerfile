FROM nginx
MAINTAINER dev.thundersdata.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \
                    location ^~ /micro-app/ { \
                      add_header Access-Control-Allow-Origin *;\
                      add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;\
                     } \
                    location /micro-app/thunderBi {\
                        add_header Access-Control-Allow-Origin '*';\
                        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\
                        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\
                    }\
                    location /micro-app/biSheng {\
                        add_header Access-Control-Allow-Origin '*';\
                        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\
                        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\
                    }\
                    location /micro-app/dataFront {\
                        add_header Access-Control-Allow-Origin '*';\
                        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\
                        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\
                    }\
                    #解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题 \
                    location / { \
                        root   /var/www/html/; \
                        index  index.html index.htm; \
                        if (!-e \$request_filename) { \
                            rewrite ^(.*)\$ /index.html?s=\$1 last; \
                            break; \
                        } \
                    } \
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

ADD build/ /var/www/html/
EXPOSE 80
EXPOSE 443