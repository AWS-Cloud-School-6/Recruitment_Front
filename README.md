# Recruitment_Front
AWS Cloud School 6기 3팀 미니 프로젝트 recruitment 사이트 Front 팀 입니다.

<img width="1153" alt="스크린샷 2024-08-23 오후 2 13 12" src="https://github.com/user-attachments/assets/3591610b-1e09-415e-88fc-7972216fb173">

<br>
대규모 트래픽 발생시 어떠한 Architecutre 를 구성해야 보다 원활한 Service 가 될지 고민하다 설정하게된 프로젝트 입니다.
<br>
<br>

이 화면을 보는데 1시간이 넘게 걸렸던 경험이 있습니다. 자동으로 어떤 Instance 를 사용했는지 Auto Scaling 은 사용했는지? 사용했다면 Metric은 뭔지 등등 의 의문이 자연스럽게 들었고 그 경험을 토대로 진행한 프로젝트 입니다. 

---


<div align=center><h1>STACKS</h1></div>

<div align=center> 
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>
  
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
   <img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> 
   
  <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
 <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 

  <br>
  <br>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon Web Services&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/AWS Organizations-E7157B?style=for-the-badge&logo=AWS Organizations&logoColor=white"> 
   <img src="https://img.shields.io/badge/AWS Elastic Load Balancing-8C4FFF?style=for-the-badge&logo=AWS Elastic Load Balancing&logoColor=white"> 
   <br>
   <img src="https://img.shields.io/badge/AWS RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white"> 
   <img src="https://img.shields.io/badge/AWS API Gateway-FF4F8B?style=for-the-badge&logo=Amazon API Gateway&logoColor=white"> 
   <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> 

<br>
<br>
   <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=Google Cloud&logoColor=white"> 
<br>
   <img src="https://img.shields.io/badge/Virtual Machine-4285F4?style=for-the-badge&logo=Google&logoColor=white"> 
   <img src="https://img.shields.io/badge/Google Kubernetes Engine-FF9900?style=for-the-badge&logo=Amazon EKS&logoColor=white"> 
   <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
   <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=Kubernetes&logoColor=white">
<br>
<br> 
   

  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
   <img src="https://img.shields.io/badge/Docker Hub-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
   <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white">
   <img src="https://img.shields.io/badge/Apache JMeter-D22128?style=for-the-badge&logo=Apache JMeter&logoColor=white">
  <br>
</div>


- [Architecture]
   - [3 Tier Architecture](#3-Tier-Architecutre)
   - [+ HPA](#+HPA)
   - [+ Messeage Queue](#+Messeage-Queue)
   - [Architecture Test](#최종-비교)
- [배운점 + 해결한점]
   - [기존 문제](#문제발생)
   - [임시 해결](#임시해결)
   - [최종 해결](#최종해결)

----

----
<br>
<br>


# Architecture

간단한 3-Tier , HPA , RabbitMQ 순으로 3가지의 Architecture 로 나누어서 설계를 하였습니다.

## 3-Tier-Architecutre

<img width="1173" alt="스크린샷 2024-08-23 오후 1 47 22" src="https://github.com/user-attachments/assets/f58ef3f2-d059-469e-bcc7-08dbc238ed22">

### 3 Tier Architecture Test

#### GET
<img width="1036" alt="스크린샷 2024-08-23 오후 1 49 24" src="https://github.com/user-attachments/assets/05b870ae-86da-4108-aee3-a87465c1dd05">

#### POST
<img width="1017" alt="스크린샷 2024-08-23 오후 1 55 13" src="https://github.com/user-attachments/assets/3daa62fe-9567-43f4-b99f-6c6022c3ee7a">


Front,Back 각각 한개의 POD 만 작성해서 Test 한 결과 입니다.

## +HPA

<img width="1179" alt="스크린샷 2024-08-23 오후 1 51 43" src="https://github.com/user-attachments/assets/df9a03cf-e92a-43f8-bc0a-82bf3fa373cc">

한개의 POD 만 사용했던것을 넘어서 내부에 HPA 를 적용했습니다. Cloud 내에서도 Traffic Metric 을 두어서 Auto Scaling 을 하는것과 같이 HPA 도 같은 기능을 합니다.

### + HPA Test

#### GET

이 부분에서 GET 은 처리량이 1번과 비교해서 상당하게 증가했다는것을 알수 있음.

<img width="1038" alt="스크린샷 2024-08-23 오후 1 55 38" src="https://github.com/user-attachments/assets/9df03ebe-b938-4760-9f86-ffe04e7f8ee8">

#### POST

<img width="1032" alt="스크린샷 2024-08-23 오후 1 55 59" src="https://github.com/user-attachments/assets/e86547bb-7926-410f-ae73-adf7668c7fe9">


## +Messeage-Queue

<img width="1208" alt="스크린샷 2024-08-23 오후 1 54 36" src="https://github.com/user-attachments/assets/5ca924b3-2e20-46c7-93a6-15f705391816">

### + Message Queue Test

#### POST

<img width="1027" alt="스크린샷 2024-08-23 오후 1 57 13" src="https://github.com/user-attachments/assets/fa2830bf-4842-4227-893f-ab49097a82f8">

## 최종-비교

<img width="1072" alt="스크린샷 2024-08-23 오후 1 57 39" src="https://github.com/user-attachments/assets/e6f5e707-5bcf-46e5-aa97-9694945c53bb">

1번에서 2번으로 Architecutre 를 변경하면서 GET 에 대한 TEST 의 처리량은 상당하게 증가했지만 POST 에 대한 처리량은 감소하기 시작합니다. 2번에서 3번으로 POST 처리량은 증가하긴 하였지만 1번에서 3번과 비교하면 1번이 더 우수한것을 확인할수 있다.

우리가 생각한 결과는 1번에서 3번으로 가면서 GET,POST 처리량이 더욱더 증가할것을 예상했지만 그렇지 못한것은 우리 모두가 가져야할 책임입니다.

----
<br>
<br>

# 배운점,해결한점

## 문제발생

Front 와 Back 사이에 내부 ALB를 두어서 Back 쪽의 로직들은 외부로 부터 숨기려고 했었습니다. 하지만 Front 측에서 RestAPI 통신시 내부에 있는 ALB 주소를 찾아가지 못하는 문제가 발생했습니다.

<img width="1358" alt="스크린샷 2024-08-24 오후 3 50 29" src="https://github.com/user-attachments/assets/0b7d4de8-9320-4e10-a2f1-2cc4be09c2dc">


## 임시해결

내부 ALB 를 외부 ALB로 변경해주면서 임시적인 해결을 할수 있었습니다.

<img width="1015" alt="스크린샷 2024-08-24 오후 3 50 55" src="https://github.com/user-attachments/assets/3f02200a-f32f-40c7-ac3d-2b184d600968">

이런 방식으로 외부 ALB를 두개 사용하는 경우 굳이 두개를 사용할 필요가 없었습니다.
그래서 ALB 한개에 Front,Back 을 각각 URL Mapping 으로 해주었습니다.


## 최종해결

이러한 문제들을 해결하기 위해 최종적으로는 AWS API Gateway를 사용해서 해결했습니다.

<img width="1246" alt="스크린샷 2024-08-24 오후 3 51 18" src="https://github.com/user-attachments/assets/702f830d-dde2-4706-a14d-17e6ccf0b474">


API Gateway 를 배포하여 외부 노출해주었고 API Gateway 는 VPC LInk 를 통해 들어온 이후 내부에 연결된 NLB 로 연결이 되게 해주었습니다.
이러한 방식을 통해서 Private Subnet 안에 있는 Instance 에 접근할수 있게 됩니다.


