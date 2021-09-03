import { Cat, CatType } from 'cats/cats.model';
import { Router } from 'express';

const catsRouter = Router(); // router 인스턴스 생성

// READ 전체 고양이 데이터 조회
catsRouter.get('/cats', (req, res) => {
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
catsRouter.get('/cats/:id', (req, res) => {
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
catsRouter.post('/cats', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {}
});

export default catsRouter;
