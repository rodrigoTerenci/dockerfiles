##################################IMAGEM FUNCIONAL#############################################
FROM debian
#MAINTAINER digoWeb rodrigoterenci@gmail.com

################################## RUNS ###########################################
RUN apt-get update && apt-get install -y apache2 && apt-get clean
COPY ./JogosJAVASCRIPT/genesis-dio-master/* /var/www/html/

##################ENVS##########################################################
ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"
ENV APACHE_RUN_USER="www-data"
ENV APACHE_RUN_GROUP="www-data"
ENV APACHE_LOG_DIR="/var/log/apache2"

EXPOSE 80

LABEL Description="WebServer"

VOLUME /var/www/html
#WORKDIR /var/www/html

#PARAMETROS PARA O ENTRYPOINT
#CMD ["sh", "-c","echo", "$HOME"]
CMD ["-DFOREGROUND"]

#PROCESSO PRINCIPAL, SE ELE PARA O CONTAINER PERDEU O MOTIVO
ENTRYPOINT ["/usr/sbin/apache2ctl"]
#ENTRYPOINT ["/usr/sbin/apache2ctl","-DFOREGROUND"]
#ENTRYPOINT ["/etc/init.d/apache2","start","FOREGROUND"]#-> ESSE PELO MENOS MOSTRA STARTANDO APACHE

