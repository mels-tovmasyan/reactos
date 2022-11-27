pipeline {
  agent {
    node {
      label 'stage'
    }

  }
  stages {
    stage('npm install') {
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }

  }
  environment {
    rgr = 'erg'
  }
}