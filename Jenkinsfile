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

    stage('Save Image to Archive') {
        sh "/usr/local/bin/save_image.sh chriswalker.dev:v" + currentBuild.number
    }

    stage('Delete Local Previous Images') {
        sh "/usr/local/bin/clean_local_images.sh chriswalker.dev"
    }

    stage('Delete Previous Archived Images') {
        sh "/usr/local/bin/delete_old.sh chriswalker.dev"
    }

    stage('Delete Remote Existing Container') {
        sh "/usr/local/bin/stop_previous_image.sh chriswalker.dev"
    }

    stage('Delete Remote Images') {
        sh "/usr/local/bin/clean_remote_images.sh chriswalker.dev"
    }

    stage('Install New Image on Remote') {
        sh "/usr/local/bin/install_image.sh chriswalker.dev:v" + currentBuild.number
    }

    stage('Deploy Image') {
        sh "/usr/local/bin/deploy.sh 8080:8080 v" +currentBuild.number + " chriswalker.dev:v" + currentBuild.number
    }

}