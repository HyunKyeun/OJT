# React.js
***
## -여분 시간
    * React 튜토리얼 클론 코딩      
    * Git에 소스코드 관리 
    * 주석을 통해 소스코드 해석 및 학습, README.md 관리
*****
# What I did and learn
## 1. test1
- 기본 JS 스타일 +1 count 
    - getElementByID로 id, class 등 불러오기
    - querySelector로 문장 받아오기
    - addEventListener으로 이벤트 
## 2. test2
- 기본 React.js 스타일(but not used)
    - scrpit 로 react, react-dom, babel 불러오기
     
        ```js
        const Title = () => { return(
        <h3 id="title" onMouseEnter={() => console.log("Mouse enter")}> Hello 
        </h3>)};
        ```
    - 함수형태로 만들고, return 해주기
    -  HTML형태 쓸때 \<div> Babel 형태 \<Title> 대문자 이용

      
## 3. test3
- 변화된 값을 실시간으로 브라우저에 반영하기
    ```js
     ReactDOM.render(<Container/>, root);
    ```
    - 변화되는 부분 바로 뒤 코드에 넣어서 갱신 가능. 

## 4. test4 
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

## 6. CSS Component

## 7. Global CSS
