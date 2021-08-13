/*
    base-router-server.js는 express에서 기본적인 route 사용에 대한 코드로 구성되어 있다.
*/


const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/public'));

/*
    app.METHOD(PATH, HANDLER)
        app     : express의 인스턴스
        METHOD  : HTTP 요청 메소드 (get, post, put, delete 등)
        PATH    : 서버에서의 경로
        HANDLER : 라우트가 일치할 때 실행되는 함수 (미들웨어)
    브라우저에서 http://localhost:3000/get으로 접근하면 hello world 문자를 볼 수 있다.
*/
app.get('/get', function (req, res) {
    res.send('hello world');
});

/*
    post, put, delete 같은 메소드의 경우 postman 같은 api 호출 플랫폼을 사용하여 테스트할 수 있다.
    http://localhost:3000/post로 요청을 하면 응답 Body에 POST request to the homepage 문자를 볼 수 있다.
*/
app.post('/post', function (req, res) {
    res.send('POST request to the homepage');
});

/*
    http://localhost:3000/put로 요청을 하면 응답 Body에 PUT request to  homepage 문자를 볼 수 있다.
*/
app.put('/put' , function (req, res) {
    res.send('PUT request to homepage');
});

/*
    http://localhost:3000/delete로 요청을 하면 응답 Body에 DELETE request to homepage 문자를 볼 수 있다.
*/
app.delete('/delete' , function (req, res) {
    res.send('DELETE request to homepage');
});

app.listen(port, () => {
    console.log("Express server has started on port " + port)
});