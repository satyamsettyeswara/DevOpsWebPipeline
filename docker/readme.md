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
