import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '@/view/header/Header'
import Login from '@/view/login/Login'
import Register from '@/view/login/Register'
// import EditorIndex from '@/view/editor/index'
import NotFound from '@/component/404'

function App() {
  // 配置路由守卫
  // 获取cookie
  // const cookie = document.cookie
  // // debugger
  // if (!cookie && location.pathname !== '/login') {
  //   location.pathname = '/login'
  // }
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/content" />
        <Route component={ Header } path="/content"></Route>
        <Route component={ Login } path="/login"></Route>
        <Route component={ Register } path="/register"></Route>
        {/* <Route component={ EditorIndex } path="/editor"></Route> */}
        {/* <Route component={ () => <Register type="login"></Register> } path="/login"></Route>
        <Route component={ () => <Register type="register"></Register> } path="/register"></Route> */}
        <Route component={ NotFound } path="/404"></Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default App
