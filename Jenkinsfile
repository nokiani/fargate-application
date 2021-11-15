pipeline {
  agent any
    
  tools {nodejs "NodeJS-16-AWS"}
    
  stages {
        
//    stage('Git') {
//      steps {
//        git 'https://github.com/nokiani/fargate-application.git'
//      }
//    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'cdk deploy'
      }
    }
  }
}
