# Next.js

---

## -3주차(1/10 ~ 1/14)

    * Next.js 튜토리얼 클론 코딩
    * Git에 소스코드 관리
    * 주석을 통해 소스코드 해석 및 학습, README.md 관리

---

# What I did and learn

## 노마드 Next 영상

## 1. Basic

- 다른 페이지 생성시 export default function ---- 안적으면 errorcode
- 없는 파일.js 접근시 404 페이지 자동생성

## 2. Pre Rendering

- react 백엔드로 앱 생성 , HTML을 next로 첫 페이지 생성
- 검색엔진, 크롤링등에서 좋은 이유 (이미 첫 페이지는 생성)
- 그후 수정 되는부분만 다시 rendering

## 3. Routing

- \<a>가 아닌 Link를 이용
- import Link from "next/link"
- \<a>는 모든 페이지를 re-render
- \<Link> Client side redering = Link가 더 빠르다

## 4. css module

- ~~.module.css 형태
- class name으로 생성시 랜덤한 id 부여, 여러 곳에서 하나의 컴포넌트를 충돌없이 사용 가능
- 여러 스타일을 한번에 쓸때
  1. \` \${} \${} \`
  2. [\~,\~].join[""]으로 한문장에 넣기

## 5. styles JSX

- style jsx {" "} 필요한 요소들만 컴포넌트 안에서만 사용하기

## 6. global css 적용

- \_app.js (\*모든 페이지 랜더링전에 \_app.js를 확인)
- 각페이지를 컴포넌트로 불러온 후 return \_app에 추가적으로 적은 코드를 랜더링하여 최종 HTML 생성
- style jsx global을 이용

## 7. next.config.js 수정

- redirect / 원하는 주소로 보내줄때 old/:path* -> new/:path*
- rewrite api 같은 공개를 원치 않는 정보등을 숨길때 실제 주소를 숨기는 방법 Source 주소만 공개

## 8. ServerSideRendering

- 기본적으로 CSR이지만, SSR을 원한다면 function name getServerSideProps 이용
- URL 사용시 프론트 URL이 아닌, 서버측 URL을 전부 적어야한다

## 9.Navigating

- Link 다른 페이지로 이동
- onClick router.push로 페이지 전환시 보낼 정보들
- props에 원하는 내용 넣기, 다른곳에서 꺼내기

---

#### 세부적인 내용은 각 js 파일 내부에

---

## 0. Next.js

- Next Routing system
  - 디렉토리 및 파일을 만들면 바로 페이지 제작 가능
- Code Spliting
  - 한꺼번에 불러오기 X
  - 필요한 페이지, 특정 페이지만 불러오기
  - 로딩속도 개선
- Hot Module Replacement
  - 새로고침을 안해도 바로 업데이트
  - 디스크에 저장하지 않는 메모리 컴파일(컴파일 속도 개선)

## 1. Making new page

- pages/indext.js 를 기본으로 시작
- pages 내부 디렉토리 생성 및 js파일 생성  
  ex ) pages/post/first.js

## 2. Link Component

- 기존 하이퍼링크 형식
  ```html
  <!-- abcd에 URL 하이퍼링크 추가  -->
  <a href="URL">abcd</a>
  ```
- Link Component 형태
  ```html
  <Link href="/post/first">
  <a> abcd </a>
  </Link>
  ```

## 3. Image Component

- public 디렉토리에 파일을 추가하여 src로 이용 가능

- 기존 이미지 업로드 방법
  ```html
  <!-- pic.jpg 위치, 이미지가 없을때 제공할 이름 "alter pic" -->
  <img src="/images/pic.jpg alt="alter pic">
  <!-- height,width을 기본적으로 적지 않으면 기본 사이즈를 따라간다 -->
  ```
- Image Component 형태
  ```js
  import Image from 'next/image'
  <!-- height,width 기본 옵션 -->
  const Component = () => (
      <Image
      src="/image/pic.jpg"
      height={100}
      width={100}
      alt="alter name"
      />
  )
  ```

## 4. Third-Party JavaScript(script)

##### next.js app 안에 만들어진 내부 파일이 아닌 외부 src를 이용할 때

- 기존 script
  ```js
  <script src="URL" />
  ```
- Script Component
  ```js
      /*
      strategy : 외부 스크립트 실행될 시간 조절
      onLoad : 스크립트 실행후 행동
      */
      import Script from 'next/script'
      <Script
      src="URL"
      strategy=" "
      onLoad= {() => ~~~
      }
      />
  ```

## 5. Layout Component

- import Layout from '상대경로'
  ```
  return(
     <Layout>
     <Head>
     ....
     </Layout>
     )
  ```
