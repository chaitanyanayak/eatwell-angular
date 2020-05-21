FROM nginx:alpine
LABEL author="CJ Nayak"

# copy nginx config file
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# copy built code to nginx html directory from where it will be served
COPY ./dist/eatwell-angular /usr/share/nginx/html

# Use the following commands to build the image and run the container (run from the root folder)
# 1. You'll first need to build the project using `ng build`. This should create the dist/eatwell-angular directory with index.html in it.

# 2. Now build the Docker image:
# docker build -t eatwell-angular -f nginx.dockerfile .

# docker run -p 8080:80 --detach --name eatwell-angular eatwell-angular

#3. Run the Docker container:
# To run the container we'll create a volume to point to our local source code. On Mac
# you can use $(pwd) to reference your local folder where your running Docker commands from.
# If you're on Windows there are several options to point to the folder. See my following post:
# https://blog.codewithdan.com/2017/10/25/docker-volumes-and-print-working-directory-pwd/

# docker run -p 8080:80 -v $(pwd)/dist:/usr/share/nginx/html nginx-angular

# 4. Clean up the container once done
# docker stop eatwell-angular
# docker rm eatwell-angular