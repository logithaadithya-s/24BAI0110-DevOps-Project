pipeline {

    agent any

    tools {
        jdk 'JDK26'
        maven 'Maven'
    }

    environment {

        IMAGE_NAME = "logithaadithya/event-manager"
        IMAGE_TAG = "v1"

        // Add Docker to PATH
        PATH = "/usr/local/bin:/opt/homebrew/bin:${env.PATH}"
    }

    stages {

        stage('Test Environment') {
            steps {

                sh 'echo "===== JAVA ====="'
                sh 'java -version'

                sh 'echo "===== MAVEN ====="'
                sh 'mvn -version'

                sh 'echo "===== DOCKER ====="'
                sh 'which docker'
                sh 'docker version'

                sh 'echo "===== KUBECTL ====="'
                sh 'which kubectl'
                sh 'kubectl version --client'

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

                    sh '''
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                    '''

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
                    echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                    docker push $IMAGE_NAME:$IMAGE_TAG
                    '''

                }

            }

        }

        stage('Deploy to Kubernetes') {

            steps {

                dir('event-manager') {

                    sh '''
                    kubectl apply -f deployment.yaml
                    kubectl apply -f service.yaml
                    '''

                }

            }

        }

        stage('Verify Deployment') {

            steps {

                sh '''
                kubectl get deployment
                kubectl get pods
                kubectl get svc
                '''

            }

        }

    }

    post {

        success {

            echo '================================='
            echo ' CI/CD Pipeline Completed '
            echo '================================='

        }

        failure {

            echo '================================='
            echo ' Pipeline Failed '
            echo '================================='

        }

    }

}