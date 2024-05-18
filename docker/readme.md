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
