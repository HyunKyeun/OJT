# Mini project
## Used Thing
- Front
    - Next
- End
    - Nest
    - Mongo
----
## 현재 기능 (Only for Next)
- Component화
    - Customized button, input, layout 구현
    - _app.js에 layout 및 child page들이 나타나도록 구현
    - 약간의 css 첨가 (글로벌x)
- Sign Up 기능
    - 상단 회원가입 클릭 시 회원 가입 페이지로 이동
    - 특정 상황에서 버튼 클릭시 동일하게 이동
    - useState기능을 이용하여 각 input에 입력된값 저장
    - useRouter 기능을 이용하여 usestate값들을 다른 페이지로 이동
    - [...params] 형태로 어떠한 입력값에 대응 가능한 페이지 구현
    - Router로 보내온 props의 데이터를 split하여 각각의 데이터로 변환 
---
## 추가할 기능 (Only for Next)
- 로그인 기능
    - 임시로 .env에 임의의 ID,PW 저장
    - 로그인 값 useState로 받아오기
    - 조건문으로 다를시 toast
    - 성공시 임의의 페이지 이동
