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

    stage('Install New Image') {
        sh "/usr/local/bin/install_image.sh chriswalker.dev:v" + currentBuild.number
    }

    stage('Delete Old Images') {
        sh "/usr/local/bin/delete_old.sh chriswalker.dev"
    }

    stage('Deploy Image') {
        // TODO
    }

}