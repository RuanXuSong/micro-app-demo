FROM nginx
MAINTAINER thundersdata.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \
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