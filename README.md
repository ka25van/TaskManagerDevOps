This is built solely for DevOps knowledge purpose.
A simple Task Manager application which performs CRUD operation using REST API method.


Features:
        Frontend (React)
        Backend (Node.js + Express)
        Database (MongoDB)

DevOps Integration:
                  Source Control: GitHub
                  CI/CD: GitHub Actions
                  Containerization: Docker
                  Orchestration: Kubernetes
                  Infrastructure as Code (IaC): Terraform
                  Monitoring: Prometheus + Grafana
                  Deployment: AWS


Steps:- 
1.Write backend code with monogodb
2.Write frontend code.
3.add .gitignore
4.Install docker, kubectl, helm, grafana, aws cli
5.create docker file for both backend and frontend seperately
6.docker build them seperately
7.docker run with port seperately
8.verify localhost url running in docker
9.write deployment and service.yml file for kubernetese
10.Deploy  kuberenetese file and verify
11.create main.tf terraform file which configures AWS. In terminal set the aws keys. So it will be secured and not shown to public
12.terraform init, plan, apply. You must see ec2 instance running in aws.
13.using prometheus we can see the cpu useage, system health, load etc
14.grafana connects to the prometheus for data vsualization using kubectl for monitoring and gives alerts


Prometheus&Grafana monitoring through kubectl:-
![{92E565A3-9C9C-4008-A4D8-BA5839B84947}](https://github.com/user-attachments/assets/226daa0d-636f-4fcf-a8c8-a7b8128bca92)


