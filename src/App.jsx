import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productInputs, userInputs } from "../formSource";
import { themeState } from "../store/themeAtom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import NewPage from "./pages/newPage/NewPage";
import Single from "./pages/singlePage/single";
import './style/dark.scss'

function App() {

  const theme = useRecoilValue(themeState);
  const [ dark, setDark] = useState(false)
  return (
    <div className={`app ${theme && 'dark'}`}>
    <Routes>
      <Route path="/" >
          <Route index element={ <Home /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='users' >
            <Route index element={ <List /> } />
            <Route path=':userId' element={ <Single /> } />
            <Route path='new' element={ <NewPage inputs={userInputs} title='Add New User' /> } />
          </Route>
          <Route path='products' >
            <Route index element={ <List /> } />
            <Route path=':productsId' element={ <Single /> } />
            <Route path='new' element={ <NewPage inputs={productInputs} title='Add New Product'/> } />
          </Route>
      </Route>
    </Routes>

    </div>
  )
}

export default App
