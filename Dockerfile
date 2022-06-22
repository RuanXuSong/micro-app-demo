FROM nginx
MAINTAINER dev.thundersdata.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                    listen       80; \
                    server_name   platform-frontend.dev.thundersdata.com; \
                    #解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题 \
                    location / { \
                        root   /var/www/html/; \
                        index  index.html index.htm; \
                        add_header Access-Control-Allow-Origin *;\
                        if ( \$request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)\$ ){\
                            add_header Cache-Control max-age=7776000;\
                            add_header Access-Control-Allow-Origin *;\
                        }\
                        if (!-e \$request_filename) { \
                            rewrite ^(.*)\$ /index.html?s=\$1 last; \
                            break; \
                        } \
                        try_files \$uri \$uri/ /main-react/index.html;\
                    } \
                    location /thunderBi {\
                        root   /var/www/html/; \
                        add_header Access-Control-Allow-Origin *;
                        if ( \$request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)\$ ){\
                            add_header Cache-Control max-age=7776000;\
                            add_header Access-Control-Allow-Origin *;\
                        }\
                        try_files \$uri \$uri/ /main-react/index.html;\
                    }\
                    location /biSheng {\
                        root   /var/www/html/; \
                        add_header Access-Control-Allow-Origin *;\
                        if ( \$request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)\$ ){\
                            add_header Cache-Control max-age=7776000;\
                            add_header Access-Control-Allow-Origin *;\
                        }\
                        try_files \$uri \$uri/ /micro-app/biSheng/index.html;\
                    }\
                    location /dataFront {\
                        root   /var/www/html/; \
                        add_header Access-Control-Allow-Origin *;\
                        if ( \$request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)\$ ){\
                            add_header Cache-Control max-age=7776000;\
                            add_header Access-Control-Allow-Origin *;\
                        }\
                        try_files \$uri \$uri/ /micro-app/dataFront/index.html;\
                    }\
                   
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

ADD build/ /var/www/html/
EXPOSE 80
EXPOSE 443