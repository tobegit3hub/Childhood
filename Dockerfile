FROM ubuntu:14.04
MAINTAINER tobe tobeg3oogle@gmail.com

RUN apt-get update

# Install Apache HTTP server
RUN apt-get install -y apache2
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid
ENV APACHE_RUN_DIR /var/run/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
RUN mkdir -p $APACHE_RUN_DIR $APACHE_LOG_DIR $APACHE_LOCK_DIR

# Install Git
RUN apt-get install -y git

# Add Childhood
RUN git clone https://github.com/tobegit3hub/Childhood.git
RUN cp -r Childhood/* /var/www/html/

# Expose the HTTP port
EXPOSE 80

# Run Apache HTTP server
CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]

