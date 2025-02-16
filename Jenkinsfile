node {
    def app
    def appName = "chriswalker.dev"

    stage('Clone Repo') {
        checkout scm
    }

    stage('Build') {
        app = docker.build(appName + ":v" + currentBuild.number)
    }

    stage('Save Image') {
        sh "~/scripts/save_image.sh " + appName + ":v" + currentBuild.number
    }

    stage('Install New Image on Remote and Move Image to Archive') {
        sh "~/scripts/install_image.sh " + appName + ":v" + currentBuild.number
    }
    
    stage('Delete Previous Archived Images') {
        sh "~/scripts/delete_old.sh " + appName
    }

    stage('Delete Remote Existing Container') {
        sh "~/scripts/stop_previous_image.sh ' " + appName + "'"
    }

    stage('Delete Remote Images') {
        sh "~/scripts/clean_remote_images.sh " + appName
    }

    /* stage('Deploy Image') {
        sh "/usr/local/bin/deploy.sh 8080:8080 " + currentBuild.number + " " + appName + ":v" + currentBuild.number
    }

    stage('Verify Image') {
        sleep(time: 10, unit:"SECONDS")
        sh "/usr/local/bin/verify_image.sh https://" + appName + "/version " + currentBuild.number
    } */

}
