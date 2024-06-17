node {
    def app

    stage('Clone Repo') {
        checkout scm
    }

    stage('Build') {
        app = docker.build("chriswalker.dev:v" + currentBuild.number)
    }

    stage('Test') {
        app.inside {
            // TODO
        }
    }

    stage('Save Image') {
        sh "/usr/local/bin/save_image.sh chriswalker.dev:v" + currentBuild.number
    }

    stage('Deploy Image') {
        // TODO
    }

}