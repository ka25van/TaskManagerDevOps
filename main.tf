provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "task_manager" {
  ami           = "ami-0c2b8ca1dad447f8a" # Amazon Linux 2
  instance_type = "t2.micro"

  tags = {
    Name = "TaskManagerInstance"
  }
}
