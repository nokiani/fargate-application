pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/nokiani/fargate-application.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }

    stage('Deploy') {
      steps {
        sh 'cdk deploy'
      }
    }
  }
}