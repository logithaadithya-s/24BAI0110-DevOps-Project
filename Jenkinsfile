pipeline {

    agent any

    environment {
        IMAGE_NAME = "logithaadithya/event-manager"
        IMAGE_TAG = "v1"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/logithaadithya-s/24BAI0110-DevOps-Project.git'
            }
        }

        stage('Build Maven') {
            steps {
                dir('event-manager') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('event-manager') {
                    sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {

                    sh '''
                    echo $PASSWORD | docker login -u $USERNAME --password-stdin
                    docker push $IMAGE_NAME:$IMAGE_TAG
                    '''
                }

            }
        }

        stage('Deploy Kubernetes') {

            steps {

                dir('event-manager') {

                    sh '''
                    kubectl apply -f deployment.yaml
                    kubectl apply -f service.yaml
                    '''

                }

            }

        }

    }

}