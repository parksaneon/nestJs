import * as express from 'express';
import { Cat, CatType } from 'app.model';

const app: express.Express = express(); // express의 인스턴스 객체(서버의 역활)

// 미들웨어 : 양쪽을 연결해서 데이터를 주고받을 수 있도록 중간에서 매개체 역활을 하는 것
// 모든 요청은 미들웨어를 거쳐서 온다
app.use((req, res, next) => {
  // 미들웨어는 .use 메서드를 사용한다.
  // req, res, 뒤에 next라는 함수가 담기는데 다음 미들웨어 or 라우터를 실행하는 역활을 한다;
  next();
});

// app.get -> 라우터 역활, 2번째 인자인 콜백함수에는 요청과 응답관련 매개 변수가 할당된다.

app.get('/', (req: express.Request, res: express.Response) => {
  // 웹에서 / 로 요청을 했을 때 동작을 적어주는 callback 함수
  // 요청에 대한 응답을 client한테 보낸다
  res.send({ cats: Cat });
});

app.get('/cats/blue', (req, res) => {
  res.send({ blue: Cat[0] });
});

app.get('/cats/som', (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on');
});
