# 원티드 프리온보딩 프론트엔드 선발과제

- 원티드 프리온보딩 프론트엔드 인턴쉽 과정을 위한 과제 제출물 입니다.

## 최종 구현 화면

[과제 제출 URL : https://master--jolly-kangaroo-12506c.netlify.app](https://master--jolly-kangaroo-12506c.netlify.app)

## 실행 방법

- git clone 후 아래와 같은 과정으로 코드 실행이 가능합니다.

```
  필요한 library를 설치합니다.
  
  $ npm install
  
  local 환경에서 코드를 실행합니다.
  
  $ npm start
```

## 구현 요구사항 목록 

### 1. 로그인, 회원가입
- [X] Assignment 1 이메일과 비밀번호 유효성 검사
- [X] Assignment 2 회원가입
- [X] Assignment 3 로그인
- [X] Assignment 4 로그인 여부에 따른 리다이렉트 처리 구현

### 2. TODO LIST
- [X] Assignment 5 리스트 화면
- [X] Assignment 6 새로운 TODO 입력
- [X] Assignment 7 TODO 완료 여부 체크
- [X] Assignment 8 TODO 우측 수정 버튼과 삭제 버튼 생성
- [X] Assignment 9 TODO 삭제 기능 구현
- [X] Assignment 10 TODO 수정 기능 구현

## 사용한 프레임워크 및 라이브러리 설명

- 요구사항에 따라 <code>React</code>, <code>create-react-app</code>을 사용했습니다.

- css style 적용을 하기 위해 <code>styled-components</code>를 사용했습니다.

- API 호출을 용이하게 하기 위해 <code>axios</code>를 사용했습니다.

- 데이터의 전역 상태 관리를 위해 <code>redux</code> 라이브러리를 사용했습니다. 또한 React에서 리덕스를 사용할 수 있도록<code>react-redux</code> 라이브러리 또한 설치했습니다.

- 리덕스 미들웨어인 <code>redux-thunk</code>라이브러리 또한 추가했습니다. <code>redux-thunk</code>라이브러리는 리덕스에서 비동기 작업을 처리할 때 많이 사용하는 미들웨어입니다. API 호출을 리덕스에서 하고 전역 관리를 하고 싶어 <code>redux-thunk</code> 라이브러리를 이용했습니다. 기존의 리덕스는 액션 객체만을 디스패치 할 수 있기에 <code>redux-thunk</code> 라이브러리가 필요했습니다.

- 리덕스와 관련된 라이브러리인 <code>redux-actions</code> 라이브러리도 추가했습니다. 리듀서에서 액션의 type 에 따라 다른 작업을 간편하게 하기 위함입니다.

## 폴더 구조 설명

```
📦 
|-- public
`-- src
    |-- commons 
      |-- actions.js
      |-- reducer.js 
      |-- store.js
    |-- components
      |-- TodoInsert.js
      |-- TodoItem.js
      |-- TodoList.js
    |-- pages
      |-- NotFoundPage.js
      |-- SignInPage.js
      |-- SignUpPage.js
      |-- ToDoPage.js
    |-- util
      |-- RestApiUtil.js
```

1. commons
- 리덕스와 관련된 공통 모듈을 모은 폴더입니다.
- 리덕스에서 필요한 스토어, 리듀서, 액션 모듈이 있습니다.

2. components 
- Todo Page를 구성하고 있는 컴포넌트들을 포함합니다.
- todo를 입력할 수 있는 TodoInsert.js가 있습니다.
- todo 개체 하나를 다루는 TodoItem.js가 있습니다.
- todo 리스트를 다루는 TodoList.js가 있습니다.

3. pages 폴더
- 각각 라우팅이 되는 페이지를 포함합니다.
- NotFoundPage.js는 없는 페이지에 접근하였을 경우 JWT 인증 토큰이 있다면 "/todo"로, 없다면 "signin"으로 보냅니다.
- SignInPage.js는 로그인 페이지입니다.
- SignUpPage.js는 회원가입 페이지입니다.
- ToDoPage.js는 투두리스트 페이지로 components로 구성되어 있습니다.(2.components를 참고해주세요)

4. util 
- 공통적으로 사용되는 util 폴더 입니다.
- RestApiUtil.js을 통해 API 호출 지점을 하나로 하여 추후 baseUrl과 같은 내용을 수정할 시 평이하도록 하였습니다.



## 과제 진행 시 주안점 작성

- 구현 요구사항의 기능을 완성시켰습니다.
- 실제 서비스를 운영할 때 자주 쓰이는 리덕스를 사용하였고 사용 패턴에 익숙해지려고 하였습니다. 전역 상태 관리인 리덕스에 redux-thunk라이브러리를 추가함으로 API 호출을 리덕스를 통해 할 수 있도록 하였습니다.
- 자주 반복되는 코드를 줄이려고 하였습니다. 줄이기 위해서는 코드 재사용성을 높여야겠다고 생각했습니다. 코드 재사용성을 높이기 위해 API 호출 지점을 RestApiUtil로 따로 두어 관리하였습니다. 


## 한계점 및 개선 사항 작성

- 라이브러리 하나하나 documents를 자세히 보지 못해 아쉬웠습니다. documents 숙지가 잘 되지 않아 사용법에 어려움이 있었으며, 해당 라이브러리를 사용하는 이유를 고려하지 않고 주로 사용하는 라이브러리를 사용했습니다. 

- 전체적인 폴더 구조를 좀더 명확하게 변경하면 좋을 것 같습니다. 명칭과 내부에 있는 파일들을 이렇게 배치해도 될까 고민이 되었습니다. 

- netlify를 통해 배포했는데 현재 CI/CD를 고려하지 않고 master 브랜치에서 push한대로 배포가 되고 있습니다. 깃 정책에 대해 생각할 필요가 있습니다.




