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
    }
}