Welcome to k8s learning and hands on

sample deployement using nginx 
    1. kubectl create deployment nignx-deploy --image=nginx
    2. using deployment.yaml file
        kubectl apply -f nginx-deploy.yaml
    easy way to remember the deployment file create (MRS-TC)
sample service connecting to deployment
    1. This is clusterIP which is only accessble to k8s cluster

Now lets try a small application setup
    create mongodb as deployement (better option is to create it as a stateful set since it is a database) and secret (for username and password)
    check whether deployment and secret are connected by exec into the pods
    create service which we will use this service to connecto other deployment (instead of creating seperate yaml file we are going to include in the same deployment file)
Next we will deploy mongoexpress with mongodb
    Create deployment for mongo express with env and all
    Create the secret if needed and configmap for the mongodb url to pass as an env variable in deployment
Create the mongoexpres service to access throught website/local
    start mongoexpress service with minikube so we can access in the webbrowser
    ```
    minikube service mongo-express-service
    ```