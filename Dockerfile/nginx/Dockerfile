#######################IMAGEM NGINX- EM CONSTRUÇÃO###############################
FROM debian


RUN apt-get update && apt-get install -y nginx && apt-get clean #&& apt-get install -y postgresql && apt-get install -y nodejs

#RUN ln -sf /dev/stdout /var/log/nginx/access.log

#RUN ln -sf /dev/stderr /var/log/nginx/error.log



COPY ./JogosJAVASCRIPT/genesis-dio-master/* /var/www/html/

EXPOSE 80

ENTRYPOINT ["/usr/sbin/nginx"]

CMD ["-g", "daemon off;"]
