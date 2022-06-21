FROM nginx
MAINTAINER thundersdata.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \
                      location / {\
                        add_header Access-Control-Allow-Origin *;\
                        add_header Cache-Control no-cache;\
                            alias /app/app/micro-app/docs/;\
                            index index.php index.html index.htm;\
                        }\

                        location /micro-app {\
                            alias /app/app/micro-app/docs/;\
                            index index.php index.html index.htm;\
                        }\

                        location /micro-app/thunderBi {\
                            add_header Access-Control-Allow-Origin *;\
                            if ( $request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)$ ){\
                                add_header Cache-Control max-age=7776000;\
                                add_header Access-Control-Allow-Origin *;\
                            }\
                            try_files $uri $uri/ /micro-app/thunderBi/index.html;\
                        }\

                        location /micro-app/dataFront {\
                            add_header Access-Control-Allow-Origin *;\
                            if ( $request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)$ ){\
                                add_header Cache-Control max-age=7776000;\
                                add_header Access-Control-Allow-Origin *;\
                            }\
                            try_files $uri $uri/ /micro-app/dataFront/index.html;\
                        }\

                        location /micro-app/biSheng {\
                            add_header Access-Control-Allow-Origin *;\
                            if ( $request_uri ~* ^.+.(js|css|jpg|png|gif|tif|dpg|jpeg|eot|svg|ttf|woff|json|mp4|rmvb|rm|wmv|avi|3gp)$ ){\
                                add_header Cache-Control max-age=7776000;\
                                add_header Access-Control-Allow-Origin *;\
                            }\
                            try_files $uri $uri/ /micro-app/biSheng/index.html;\
                        }\
                  
                 
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

ADD build/ /var/www/html/
EXPOSE 80
EXPOSE 443