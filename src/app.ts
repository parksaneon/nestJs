import * as express from 'express';
import { Cat, CatType } from 'app.model';

const app: express.Express = express(); // express의 인스턴스 객체(서버의 역활)

app.get('/', (req: express.Request, res: express.Response) => {
  // 웹에서 / 로 요청을 했을 때 동작을 적어주는 callback 함수
  console.log(req);
  // 요청에 대한 응답을 client한테 보낸다
  res.send({ cats: Cat });
});

app.listen(8000, () => {
  console.log('server is on');
});
