import * as express from 'express';

const app: express.Express = express(); // express의 인스턴스 객체 - 서버의 역활
const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
  // 웹에서 / 로 요청을 했을 때 동작을 적어주는 callback 함수
  res.send('hi'); // 요청에 대한 응답을 client한테 보낸다
});

app.listen(port, () => {
  // listen - 서버를 여는 메서드
  console.log(`listening at ${port}port`);
});
