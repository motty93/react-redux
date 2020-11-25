import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { UsersReducer } from '../users/reducers'

// combineReducers
// 分割したReducresをまとめる・stateカテゴリ毎・オブジェクトをreturnする
// initialStateと同じ形になるように作成していく
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      // products: ProductsReducer,
      users: UsersReducer
    }),
    applyMiddleware(routerMiddleware(history))
  )
}
