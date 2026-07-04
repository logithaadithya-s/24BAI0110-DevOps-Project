# Event Manager - DevOps Project

A complete DevOps implementation of a Spring Boot Event Manager application demonstrating Continuous Integration, Continuous Deployment, Containerization, Kubernetes orchestration, and Monitoring using Jenkins, Docker, Kubernetes, Nagios, Graphite, and Grafana.

---

## Project Overview

This project demonstrates a complete DevOps workflow from application development to deployment and monitoring.

The application is a Spring Boot based **Event Manager** website that allows users to view technical symposium information including:

- Home Page
- Schedule
- Speakers
- Registration

The application is containerized using Docker, deployed on Kubernetes, automated using Jenkins, and monitored using Nagios, Graphite, and Grafana.

---

# Architecture

```
                 GitHub Repository
                        │
                        ▼
                   Jenkins Pipeline
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
   Maven Build     Docker Build     Docker Push
                        │
                        ▼
                 Docker Hub Repository
                        │
                        ▼
                 Kubernetes Deployment
                        │
                        ▼
              Spring Boot Application
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
    Nagios Monitoring        Graphite + Telegraf
                                        │
                                        ▼
                                   Grafana Dashboard
```

---

# Technologies Used

| Technology | Purpose |
|------------|----------|
| Java 21 | Application Development |
| Spring Boot | Backend Framework |
| Maven | Build Tool |
| Docker | Containerization |
| Docker Hub | Image Registry |
| Kubernetes | Container Orchestration |
| Jenkins | CI/CD Pipeline |
| Nagios | Website Monitoring |
| Graphite | Metrics Storage |
| Telegraf | System Metrics Collection |
| Grafana | Metrics Visualization |

---

# Project Structure

```
Event-Manager/
│
├── event-manager/
│   ├── src/
│   ├── target/
│   ├── pom.xml
│   ├── Dockerfile
│   └── ...
│
├── deployment.yaml
├── service.yaml
├── Jenkinsfile
├── localhost.cfg
├── telegraf/
│     └── telegraf.conf
│
└── README.md
```

---

# Features

- Spring Boot Web Application
- Docker Containerization
- Kubernetes Deployment
- Jenkins CI/CD Pipeline
- Docker Hub Integration
- Nagios Website Monitoring
- Graphite Metrics Collection
- Grafana Monitoring Dashboard

---

# Jenkins Pipeline

The Jenkins pipeline performs the following stages:

1. Checkout Source Code
2. Build using Maven
3. Create Docker Image
4. Push Image to Docker Hub
5. Deploy to Kubernetes

Pipeline Flow:

```
GitHub
   │
   ▼
Jenkins
   │
   ▼
Maven Build
   │
   ▼
Docker Build
   │
   ▼
Docker Push
   │
   ▼
Kubernetes Deploy
```

---

# Docker

Build Docker Image

```bash
docker build -t logithaadithya/event-manager:v1 .
```

Push Image

```bash
docker push logithaadithya/event-manager:v1
```

---

# Kubernetes Deployment

Deploy Application

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Check Pods

```bash
kubectl get pods
```

Check Services

```bash
kubectl get svc
```

Port Forward

```bash
kubectl port-forward service/event-manager-service 8082:8080
```

Application URL

```
http://localhost:8082
```

---

# Jenkins Setup

Install Plugins

- Git
- Pipeline
- Docker Pipeline
- Kubernetes CLI
- Maven Integration

Configure

- JDK
- Maven
- Docker
- kubectl

Create Pipeline Job

Repository:

```
https://github.com/logithaadithya-s/24BAI0110-DevOps-Project.git
```

Pipeline Script:

```
Jenkinsfile
```

---

# Nagios Monitoring

Nagios monitors:

- Website Availability
- HTTP Status

Application URL

```
http://host.docker.internal:8082
```

Nagios UI

```
http://localhost:8085
```

Example Status

```
Event Manager Website

Status : OK

HTTP 200 OK
```

---

# Graphite Monitoring

Metrics Collected

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- System Uptime

Graphite URL

```
http://localhost:8086
```

---

# Grafana Dashboard

Grafana Visualizes

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- Uptime

Grafana URL

```
http://localhost:3000
```

Default Login

```
Username: admin

Password: admin
```

---

# Monitoring Stack

```
Telegraf
     │
     ▼
 Graphite
     │
     ▼
 Grafana
```

---
# Future Enhancements

- GitHub Webhooks
- Helm Charts
- Prometheus Integration
- Kubernetes Ingress
- SSL/TLS
- SonarQube Integration
- ArgoCD Deployment
- Automated Testing

---

# Author

**Logith Aadithya S**

B.Tech Computer Science (AI & ML)

VIT Vellore

GitHub:

https://github.com/logithaadithya-s

---

# License

This project is developed for educational purposes as part of the DevOps course at VIT.