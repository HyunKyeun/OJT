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
    - [...params] 형태로 어떠한 입력값에도 ("," , "/"제외) 대응 가능한 페이지 구현
    - Router로 보내온 props의 데이터를 split하여 각각의 데이터로 변환 
- 로그인 기능
    - 임시로 .env에 임의의 ID,PW 저장
    - 로그인 값 useState로 받아오기
    - 조건문으로 다를시 toast
    - 성공시 임의의 페이지 이동
- 기타 
    - .env 파일 git 무시
---
## 추가할 기능
- next.config.js내에 rewrites 기능 (URL에 넘겨지는 정보 제한하기)
- pw on/off 보이기
- 로그인 및 회원 가입 input에 조건 걸기 ( 특수 문자 or split, 주소 문자 등등)
- Nest, MongoDB
- more awesome thing

