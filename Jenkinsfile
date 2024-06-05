node {
    def app

    stage('Clone Repo') {
        checkout scm
    }

    stage('Build') {
        app = docker.build("chriswalker.dev/chriswalker.dev:v" + currentBuild.number)
    }

    stage('Test') {
        app.inside {
            // TODO
        }
    }

    stage('Push image') {
        // TODO
    }

}