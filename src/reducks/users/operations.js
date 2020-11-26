import { signInAction } from './actions'
import { push } from 'connected-react-router'

// Login.jsxにあるdispatch部分をoperationsで処理する
export const signIn = (email, password) => {

  // dispatch: actionsを呼び出す
  // getState: 現在のstoreのメソッドを取得できる
  return async (dispatch, getState) => {
    const state = getState() // getStateはメソッドの形で呼び出す
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      // example github
      const url = 'https://api.github.com/users/motty93'
      const response = await fetch(url)
                          .then(res => res.json())
                          .catch(() => null)
      const username = response.login

      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001",
        username: username
      }))
      dispatch(push('/'))

      // TODO: firebase auth設定後
      // const userData = await emailSignIn(email, password)
      // dispatch(signInAction({
      //   isSignedIn: true
      // }))
    }
  }
}
