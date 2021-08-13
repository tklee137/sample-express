/*
    base-server.js는 express를 사용하여 기본적인 서버 구동을 하기 위한 코드로 구성되어 있다.
*/



/*
    require('express')
    npm install express 명령으로 설치한 express 모듈을 불러온다.
    설치한 express는 node_modules라는 폴더 안에 저장되며 package.json에 express가 설치되었음이 기록된다.
*/
const express = require('express');

/*
    express application을 생성한다.
    express() 함수는 express 모듈에서 내보내는 최상위 함수다.
*/
const app = express();

/* 사용할 port를 선언한다. */
const port = 3000;

/*
    express.json()
    express에 내장된 미들웨어 함수로 json으로 이루어진 request body를 처리하기 위해 사용한다.
    express version 4.16 이상인 경우에만 사용할 수 있으며 아래 버전인 경우 body-parser 모듈을 사용해야 한다.
*/
app.use(express.json());

/*
    express.urlencoded([option])
    객체로 전달된 데이터 내에 또다른 중첩된 객체를 허용하기 위해 사용한다.
        extended true   : qs 모듈을 사용하여 쿼리 스트링을 해석
        extended false  : node에 기본 내장된 queryString 모듈을 사용하여 쿼리 스트링을 해석
    express version 4.16 이상인 경우에만 사용할 수 있으며 아래 버전인 경우 body-parser 모듈을 사용해야 한다.
*/
app.use(express.urlencoded({ extended: true }));

/*
    express.static(root, [option])
    express에 내장된 미들웨어 함수로 정적 파일(이미지, CSS 등)을 사용하기 위해 사용한다.
    http://localhost:3000/static/coffee.png으로 접근하면 public/coffee.png 파일을 볼 수 있다.
    __dirname는 현재 실행중인 폴더의 절대경로 이다.
*/
app.use('/static', express.static(__dirname + '/public'));


/*
    지정된 포트로 연결을 수신하는 http 서버를 구동한다.
*/
app.listen(port, () => {
    console.log("Express server has started on port " + port)
});