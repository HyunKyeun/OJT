# Mini project

## Used Thing

- Front
  - Next
- End
  - Nest
  - Mongo

---

## 현재 기능 (Only for Next, nest)

- Component화
  - Customized button, input, layout 구현
  - \_app.js에 layout 및 child page들이 나타나도록 구현
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

# 추가된 기능 (현재 기능 개선 및 삭제 )

- nest내에 간단한 API 구현
- next 메인 화면에 현재 저장된 userinfo 갯수 불러오기
- 로그인 기능으로 nest에 저장된 데이터 불러오기
- 회원 가입 기능으로 새로운 유저 데이터 저장
- 아이디, 비밀번호를 이용하여 email, name 변경하기
- 이름 입력하여 아이디 찾기
- 비밀번호 수정하기 (아이디는 x)
- 탈퇴기능
- 좀더 어썸한 조건문 처리
- 좀더 다양하고 세밀한 api 처리

---

## 추가할 기능

- next.config.js내에 rewrites 기능 (URL에 넘겨지는 정보 제한하기)
- 로그인 및 회원 가입 input에 조건 걸기 ( 특수 문자 or split, 주소 문자 등등)
- MongoDB
- more awesome thing
- swagger에 세부사항 표시
