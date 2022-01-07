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
        const Title = () => { 
            return(
        <h3 
        id="title" 
        onMouseEnter={() => 
        console.log("Mouse enter")}> Hello 
        </h3>)};
        ```
    - 함수형태로 만들고, return 해주기
    - scripte type <span style="color:lightgreen">"text/babel"</span> 설정 
    -  HTML형태 쓸때 \<<span style="color:orange">Title</span>> 대문자 이용

      
## 3. test3
- 변화된 값을 실시간으로 브라우저에 반영하기
    ```js
     ReactDOM.render(<Container/>, root);
    ```
    - 변화되는 부분 바로 뒤 코드에 넣어서 갱신 가능.
    - 간단한 예제에서는 괜찮으나 갱신이 필요할때마다 render는 not good

## 4. test4 
- useState를 이용하여 [Counter, setCounter] 이용 하여 갱신
    ```js
    // 클릭시 setCounter를 호출, counter를 +1
    const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter + 1);
        };
    ```
    - render를 초기에 한번 실행 그후는 변하는값만 수정
## 5. test5
- useState를 여러개 사용하여 min <-> hour 바꾸기
- event.target.value 입력한 숫자만 출력하기
- flip 상태에 따라 3항 연산자를 통해 입력, 출력 형태 바꾸기
    ```html
    <input value={
        flipped ? Amount * 60 : Amount} id="minutes" 
        placeholder="Minutes" 
        type="number" 
        onChange={onChange} 
        disabled={flipped === true}
        />
    ```
## 6. test6
- Km <-> Miles 추가 
- Select + value 를 이용하여 원하는 Component만 출력