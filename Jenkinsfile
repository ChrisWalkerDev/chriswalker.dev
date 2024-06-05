node {
    def app

    stage('Clone Repo') {
        checkout scm
    }

    stage('Build') {
        app = docker.build("chriswalker.dev/chriswalker.dev")
    }

    stage('Test') {
        app.inside {
            sh 'TODO'
        }
    }

    stage('Push image') {
        sh 'TODO"'
    }

}