import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import cdk = require('@aws-cdk/core');

class DemoLabFargate extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC and Fargate Cluster
    // NOTE: Limit AZs to avoid reaching resource quotas
    const demovpc = new ec2.Vpc(this, 'MyDemoLabVPC', { maxAzs: 2 });
    const democluster = new ecs.Cluster(this, 'DemoLabCluster', { vpc: demovpc });

    // Instantiate Fargate Service with just cluster and image
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'DemoLabNginx', {
      cluster: democluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('nginx'),
        containerName: 'nginxApp',
        containerPort: 80,
      },
    });
  }
}

const app = new cdk.App();

new DemoLabFargate(app, 'DemoLab');

app.synth();
