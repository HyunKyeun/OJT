# Next.js
***
## -3주차(1/10 ~ 1/14)
    * Next.js 튜토리얼 클론 코딩      
    * Git에 소스코드 관리 
    * 주석을 통해 소스코드 해석 및 학습, README.md 관리
*****
# What I did and learn
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
        <Script
        src="URL"
        strategy=" "
        onLoad= {() => ~~~
        }
        />
    ```

