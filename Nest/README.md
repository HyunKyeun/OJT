# Nest
## test-project
- Nomad nest api 클론 코딩
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