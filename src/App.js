
import React, { useState } from 'react';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './layout/home';
import Mainlayout from './layout/mainlayout';
import Customer from './component/customer/customer';
import NotFoundPage from './layout/404';
import SignInForm from './layout/auth-layout/login';
import SignInPage from './layout/auth-layout/page';
import LoginForm from './layout/auth-layout';
import { PrivateRoutesValidator } from './validators/validators';

const App = (props) => {
  const [auth, setAuth] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutesValidator />}>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path='/company/create' element={<Customer />} />
          </Route>
        </Route>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/login2" element={<LoginForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="bg-blue-500 p-6  text-center text-red-600">
//         <h1 className="text-4xl">Welcome to Tailwind CSS in React</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
// const Stand = ()=>{
//   return(
//     <Stand/>
//   )
// }

// const Sit = ()=>{
//   return(
//     <Sit/>
//   )
// }
