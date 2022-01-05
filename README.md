# OJT
-------------
#### 1월 2주 - 5주차 동안 진행될 예정이며 2주차에는 개발환경 설정 및 Git 사용법을, 3 ~ 5주차에 걸쳐 Next.js, Nest.js, Mongo.DB 클론코딩 및 소스코드를 관리

###### *로컬 서버내의 개인 작업 공간을 이용 및 코드 저장
###### *진행도에 따라 유동적으로 다음 사항 진행
***
## -2주차(1/3 ~ 1/9)
    * 개발환경 구축 : VSC, Next.js, NestJS, MongoDB
    * SSH 로컬 서버 접속 환경 ()
    * Git 사용법 및 README.md 수정
***
## -3주차(1/10 ~ 1/14)
    * Next.js 튜토리얼 클론 코딩 [1]   
    [1] : <https://nextjs.org/>   
    * Git에 소스코드 관리 
    * 주석을 통해 소스코드 해석 및 학습, README.md 관리 
***
## -4주차(1/17 ~ 1/23)
    * Nest.js 튜토리얼 클론 코딩 <https://nestjs.com/>
    * Git에 소스코드 관리 
    * 주석을 통해 소스코드 해석 및 학습, README.md 관리 
***
## -5주차(1/24 ~ 1/31)
    * Mongo 서버 및 접속 환경 구축 
    * <https://mongoosejs.com/> 문서 클론 코딩
    * Git에 소스코드 관리
    * 주석을 통해 소스코드 해석 및 학습, README.md 관리 
*****
# Issue
### 1-1. __Git 사용법 숙지 및 사용법__   
    - __git 저장소 생성 및 remote 설정__    
        git Bash를 통해 작업 폴더 접근   
        git init // 저장소 생성   
        git remote add origin 'URL'// origin이라는 이름으로 repo주소를 원격 저장소로 저장   
        git remote -v // 저장소 이름 확인 및 URL 확인   
    - __원격(git 저장소) -> 로컬(개인 저장소)__   
        git fetch // 저장소의 최신 이력 확인 (only)   
        git merge -a // 이력을 토대로 내부에 저장   
        git pull // fetch + merge를 한번에    
    - __로컬(개인 저장소) -> 원격(Git 저장소)__   
        git status // untracked 파일 확인   
        git add Filename // track 상태로 만들기
        git commit -m "message" // comment 추가  
        git push // git 저장소에 track 파일 올리기   
### 1-2. __개인 저장소, 로컬 서버 저장소 pull, push 확인__   
    - main으로 저장한 default branch에 push 및 pull 확인   
    - 로컬서버에서 허가요청을 받아 같은 repo에 다른 branch로 push 및 pull 확인   
    - 다른 branch에서 받아와서 main branch에 push 확인  
### 2-1. __SSH 접속__     
    - VSC 내에 "Remote - SSH" Extension을 이용   
    Hostname, User, Port 설정   
    접속후 리눅스 터미널창을 통해 접속 확인    
### 3. abcd
    - 해결
