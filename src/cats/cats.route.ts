import { Cat, CatType } from 'cats/cats.model';
import { Router } from 'express';
import { createCat, deleteCat, readAllCat, readCat, updateCat, updatePartialCat } from './cats.service';

const catsRouter = Router(); // router 인스턴스 생성

// READ 전체 고양이 데이터 조회
catsRouter.get('/cats', readAllCat);

// READ 특정 고양이 데이터 조회
catsRouter.get('/cats/:id', readCat); // :id 로 하면 :뒤의 단어 자체가 parameter가 된다.

// CREATE 새로운 고양이 추가
catsRouter.post('/cats', createCat);

// UPDATE 고양이 데이터 업데이트 -> PUT
catsRouter.put('/cats/:id', updateCat);

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
catsRouter.patch('/cats/:id', updatePartialCat);

// DELETE 고양이 데이터 업데이트 -> DELETE
catsRouter.patch('/cats/:id', deleteCat);

export default catsRouter;
