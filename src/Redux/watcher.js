import { call, put, takeEvery} from 'redux-saga/effects';
import {INIT_CATEGORY_SAGA, INIT_PRODUCTS_SAGA, INIT_ONE_PRODUCT_SAGA} from './ActionTypes'
import {fetchInitCategorySaga} from './async/fetchInitCategorySaga'
import {initCategoryAC, initProductsAC, initOneProductAC} from './ActionCreators'
import {fetchInitProductsSaga} from './async/fetchInitProductsSaga'
import {fetchInitOneProductSaga} from './async/fetchInitOneProductSaga'


//init category
export function* workerInitCategory() {
  try {
    const allCategory = yield call(fetchInitCategorySaga);
    
    yield put(initCategoryAC(allCategory.data));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

//init products
export function* workerInitProducts(action) {
  try {
    
    const Products = yield call(fetchInitProductsSaga,action.payload);
    
    yield put(initProductsAC (Products.data));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

//init one product
export function* workerInitOneProduct(action) {
  try {
    const oneProduct = yield call(fetchInitOneProductSaga,action.payload);
    yield put(initOneProductAC (oneProduct.data));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* watcher() {
  yield takeEvery(INIT_CATEGORY_SAGA, workerInitCategory);
  yield takeEvery(INIT_PRODUCTS_SAGA, workerInitProducts);
  yield takeEvery(INIT_ONE_PRODUCT_SAGA, workerInitOneProduct);
}
