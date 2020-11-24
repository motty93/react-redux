import { createStore as reduxCreateStore, combineReducers } from 'redux'
// import { ProductsReducer } from '../products/reducers'
import { UsersReducer } from '../users/reducers'

// combineReducers
// 分割したReducresをまとめる・stateカテゴリ毎・オブジェクトをreturnする
// initialStateと同じ形になるように作成していく
export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      // products: ProductsReducer,
      users: UsersReducer
    })
  )
}
