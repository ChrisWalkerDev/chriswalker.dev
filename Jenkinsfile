pipeline {
    agent { 
        dockerfile {
            args '-t chriswalker.dev'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
