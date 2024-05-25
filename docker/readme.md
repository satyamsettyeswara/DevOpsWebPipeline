First created normal basic node project just to print hello world
    npm init -y
    npm install express
    vi index.js (write node to print hello world)
    node index.js (to run the node application)
Next created the dockerfile to create the docker image to run as docker container the application

To build docker image
    docker build -t node-image .
To run container
    docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=3000 -p 3000:3000 -d --name node-contianer node-image
check in localhost:3000 whether application is running or not
To exec into the container
    docker exec -it node-container bash
To use docker-compose so everytime we dont have to use the long command to build the image or to run the contianer
    created docker-compose file for easy building and running of container
    created docker-compose.dev.yaml file for development environment
    created docker-compose.prod.yaml file for productin environment
    command to run the docker-compose
        docker-compose up -d
        docker-compose up -d --build(will build new image if we change something in the dockerfile)
    command to run the docker-compose with  dev environment
        docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
    command to remove the container
        docker-compose down -v
        docker-compsoe -f docker-compose.yaml -f docker-compose.dev.yaml down -v
To use mongod db in nodes app
 add new service mongo to dockerfile with volumes and connect using docker inspect to get ip address and add the ip address to the nodeapp (which is tedious process which we will resolve in below using docker networks
 as our node app will create a seperate network for our application we can directly use the service(container) in that network using the name of the container so here we can just update the ip address with the name of the container (service) that we used to create the mongo db which is mongo

    we can ping mongo inside the mongo container which return the ping which means mongo name itself we can use as ipaddress
 )
rebuild the image to effect the changes
To see the all the networks in docker
    docker network ls
To inpsect a specific network 
    docker network inspect <network name> (this will show all the services and their ip add and mac add e.t.c)
To use nginx 
    this will be used as an load balancer in our node js application by deploying two node containers
    by creating config/config.js file and adding then nginx and updating the compose files



