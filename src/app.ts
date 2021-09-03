import * as express from 'express';
import { Cat, CatType } from 'app.model';

const app: express.Express = express(); // express의 인스턴스 객체(서버의 역활)

// 미들웨어 : 양쪽을 연결해서 데이터를 주고받을 수 있도록 중간에서 매개체 역활을 하는 것
// 모든 요청은 미들웨어를 거쳐서 온다
app.use((req, res, next) => {
  console.log('logging middleware');
  next();
});

// json 미들웨어 - express 에서 json데이터를 인식가능 하게 해줌
app.use(express.json());

// READ 전체 고양이 데이터 조회
app.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// READ 특정 고양이 데이터 조회
// :id 로 하면 :뒤의 단어 자체가 parameter가 된다.
app.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// CREATE 새로운 고양이 추가
app.post('/cats', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {}
});

// 404 미들웨어
app.use((req, res, next) => {
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on');
});
