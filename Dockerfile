FROM nginx
MAINTAINER thundersdata.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \

                    location /micro-app/thunderBi {\
                        add_header Access-Control-Allow-Origin '*';\
                        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\
                        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\
                        if ($request_method = 'OPTIONS') {\
                            return 204;\
                        }\
                        #root   html/dist;\
                        alias  html/dist;\
                        index  index.html;\
                    }\
                    location ^~ /micro-app/ { \
                      add_header Access-Control-Allow-Origin *;\
                      add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;\
                  } \
                 
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

ADD build/ /var/www/html/
EXPOSE 80
EXPOSE 443