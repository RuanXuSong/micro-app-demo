From registry-vpc.cn-hangzhou.aliyuncs.com/genergydata-public/nginx:1.17.2
COPY default.conf /etc/nginx/conf.d/
COPY build /usr/share/nginx/html/smart-bi