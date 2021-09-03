import * as express from 'express';
import catsRouter from 'cats/cats.route';

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express(); // express의 인스턴스 객체(서버의 역활)
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleWares() {
    // 미들웨어 : 양쪽을 연결해서 데이터를 주고받을 수 있도록 중간에서 매개체 역활을 하는 것
    // 모든 요청은 미들웨어를 거쳐서 온다
    this.app.use((req, res, next) => {
      console.log('logging middleware');
      next();
    });

    // json 미들웨어 - express 에서 json데이터를 인식가능 하게 해줌
    this.app.use(express.json());

    this.setRoute();

    // 404 미들웨어
    this.app.use((req, res, next) => {
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleWares();
    this.app.listen(8000, () => {
      console.log('server is on');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
