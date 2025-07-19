pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '755af937-c2fb-4931-9069-808285c116bd'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }

        stage ('Test') {
            steps {
                sh '''
                    test -f build/index.html
                    npm test
                '''
            }
        }

        stage ('Deploy') {
            steps {
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify --version
                    echo 'Deploying to production Site ID: $NETLIFY_SITE_ID'
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod
                '''
            }
        }
    }

    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}