---
id: deploying
sidebar_label: 004 - Deploying
title: Deploying to production
description: How to deploy your Backstage instance to Kubernetes and other platforms
---

Audience: Admins

## Summary

You have a Docker image, a database, and authentication configured. Now it is
time to deploy. The best way to deploy Backstage is _the same way_ you deploy
other software at your organization. This page covers deploying to Kubernetes
as a concrete example and points to resources for other platforms.

## Deploying to Kubernetes

Kubernetes is the most common deployment target for Backstage. The deployment
involves a few Kubernetes objects: a namespace, secrets, a deployment, and a
service.

### 1. Create a namespace

```yaml
# kubernetes/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: backstage
```

```shell
kubectl apply -f kubernetes/namespace.yaml
```

### 2. Create secrets

Store your database credentials and any other secrets (API tokens, auth
client secrets) as Kubernetes Secrets:

```yaml
# kubernetes/backstage-secrets.yaml
apiVersion: v1
kind: Secret
metadata:
  name: backstage-secrets
  namespace: backstage
type: Opaque
data:
  POSTGRES_USER: <base64-encoded-value>
  POSTGRES_PASSWORD: <base64-encoded-value>
```

:::note

Kubernetes secrets are base64-encoded but not encrypted. Enable
[Encryption at Rest](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/)
for your cluster and consider tools like
[SealedSecrets](https://github.com/bitnami-labs/sealed-secrets) for storing
secrets in Git.

:::

```shell
kubectl apply -f kubernetes/backstage-secrets.yaml
```

### 3. Create the deployment

```yaml
# kubernetes/backstage.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backstage
  namespace: backstage
spec:
  replicas: 1
  selector:
    matchLabels:
      app: backstage
  template:
    metadata:
      labels:
        app: backstage
    spec:
      containers:
        - name: backstage
          image: <your-registry>/backstage:<tag>
          imagePullPolicy: IfNotPresent
          ports:
            - name: http
              containerPort: 7007
          envFrom:
            - secretRef:
                name: backstage-secrets
          readinessProbe:
            httpGet:
              port: 7007
              path: /.backstage/health/v1/readiness
          livenessProbe:
            httpGet:
              port: 7007
              path: /.backstage/health/v1/liveness
```

Replace `<your-registry>/backstage:<tag>` with the full image URL from your
container registry.

```shell
kubectl apply -f kubernetes/backstage.yaml
```

### 4. Create a service

```yaml
# kubernetes/backstage-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: backstage
  namespace: backstage
spec:
  selector:
    app: backstage
  ports:
    - name: http
      port: 80
      targetPort: http
```

```shell
kubectl apply -f kubernetes/backstage-service.yaml
```

### 5. Expose the service

The Service is not accessible outside the cluster by default. Use a Kubernetes
[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
or an
[external load balancer](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/)
to expose Backstage to your users.

Make sure the `app.baseUrl` and `backend.baseUrl` values in your
`app-config.production.yaml` match the URL where users will access Backstage:

```yaml title="app-config.production.yaml"
app:
  baseUrl: https://backstage.example.com
backend:
  baseUrl: https://backstage.example.com
  listen:
    port: 7007
```

## Other deployment platforms

Backstage is a standard Node.js application running in a Docker container, so
it works on any platform that supports containers:

- **Amazon ECS**: Create a task definition referencing your Docker image, set
  up an ECS service, and place it behind an Application Load Balancer.
- **Google Cloud Run**: Deploy the image as a Cloud Run service with the
  appropriate environment variables.
- **Azure Container Apps**: Deploy the image and configure ingress through
  the Azure portal or CLI.
- **Docker Compose**: Suitable for smaller installations. Run Backstage and
  PostgreSQL together using a `docker-compose.yaml`.

Community-contributed deployment guides are available in the
[contrib/docs/tutorials](https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/)
folder of the Backstage repository.

## Further reading

For a detailed guide including setting up PostgreSQL in Kubernetes, see
the [Deploying with Kubernetes](../../deployment/k8s.md) reference
documentation.

## Next steps

Your Backstage instance is deployed. Next, let's look at how to manage
configuration effectively.

- [Config-first development](./005-config-first.md)
