// import React from 'react'
// import Sidebar from '../component/sidebar'
// import Home from '../component/home'

// const Mainlayout = () => {
//   return (
//     <main className="flex min-h-screen flex-grow">
//       <Sidebar className="fixed hidden dark:bg-gray-50 xl:block" />
//       <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
//         {/* <Header /> */}
//         <div className="flex flex-grow flex-col md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
//           <Home />
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Mainlayout

import React from 'react';
import Sidebar from './sidebar';
import Home from './home';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <main className="flex min-h-screen">
      <Sidebar className="fixed hidden dark:bg-gray-50 xl:block" />
      {/* <div className="flex w-full flex-col xl:ml-64 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9"> */}
        <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
          <Outlet/>
        </div>
      {/* </div> */}
    </main>
  );
};

export default Mainlayout;

// md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9
// "electron-dev": "electron ."
