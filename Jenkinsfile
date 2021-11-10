pipeline {
  agent none 
  stages {
    stage('Checkout, Test & Build') {
        agent {
          docker {
            image 'node:10-alpine'
            args '-p 3001:3000'
          }
        }
        environment {
          HOME = '.'
        }
        stages {
          stage('Install') {
            steps {
              sh 'npm install'
            }
          }
          stage('Build') {
            steps {
              sh './jenkins/scripts/build.sh'
            }
          }
          stage('Archive') {
            steps {
              archiveArtifacts 'build/**'
            }
          }
        }
    }
    stage('Deploy') {
      agent {
        label 'master'
      }
      options {
        skipDefaultCheckout()
      }
      steps {
        sh 'rm -rf /var/www/fedent'
        sh 'mkdir /var/www/fedent'
        sh 'cp -Rp build/** /var/www/fedent'
        sh 'docker stop fedent || true && docker rm fedent || true'
        sh 'docker run -dit --name fedent -p 8003:80 -v /var/www/fedent/:/usr/local/apache2/htdocs/ httpd:2.4'
      }
    }
  }
}