pipeline {
    agent any

    tools {
        jdk 'JDK26'
        maven 'Maven'
    }

    stages {
        stage('Test') {
            steps {
                sh 'java -version'
                sh 'mvn -version'
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
                    sh 'docker build -t logithaadithya/event-manager:v1 .'
                }
            }
        }
    }
}