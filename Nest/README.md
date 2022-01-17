# Nest
## test-project
- Nomad nest api 클론 코딩
- 시작시 npm run 10001 (포트 10001 수정 및 package.json 수정)
- dev시 npm run start:dev로 실시간 수정사항 확인 가능
-
```
    npm i class-validator 
    npm i class-transformer
    npm i @nestjs/mapped-types

-----
# 기본 틀 
- Main
    - 모듈 실행 및 몇번 포트로부터 받아올지 확인
- Module
    - controller 종류, service 종류를 결정
- controller
    - URL을 받아와서 해당하는 서비스를 실행할때 사용
    - 간단한 function도 가능은 하나 일단은 서비스를 받아와서 return할때 사용
    - 무언가를 불러오기 위해서는 요청을 해야한다 
- Service
    - 각 business function 정의(무엇을 리턴 할 것인가)
    - controller의 명령어와 function 이름이 같을 필요는 없다.
- Data Transfer Object(dto)
    - 계층 간 데이터 교환용 객체...
    - URL로 넘어온 데이터 -> DTO form을 거치고 -> 넘어간다
    - 서버 실시간 확인 및, 유효성 검사 
- Pipe
    app.useGlobalPipes(
    new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted : true,
    transform : true,
    })
    );
  - whitelist : entity에 선언된 변수 사용시에만 request
  - forbidNonWhitelisted : entity에 선언되지 않은 변수 사용시 bad request 
  - transform : 유저들의 post를 실제 타입으로 변환
    - transform을 지우고 /1 실행시 string (url에서 넘어오는건 string)
    - transform 사용시 /1 -> number (선언한 타입으로 자동 변환)
- string to number
    (movie => movie.id === +id)
    - +를 붙이면 string을 number타입으로 변환
