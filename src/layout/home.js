// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Text, Title } from 'rizzui'
// import SocialItems from '../common/social-shares'
// import Sidebar from './sidebar'


// const Home = () => {
//   return (
//     <div>
//       <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-gray-50">
//         <div className="sticky top-0 z-40 px-6 py-5 backdrop-blur-lg lg:backdrop-blur-none xl:px-10 xl:py-8">
//           <div className='mx-auto flex max-w-[1520px] items-center'>
//             <Link to={'/'}>
//               <img
//                 style={{ width: 70 }}
//                 src={require('../assets/images/logo.png')}
//                 alt="fhf"
//                 className="dark:invert"
//               />
//             </Link>
//           </div>
//         </div>
//         <div className="flex grow items-center px-6 xl:px-10">
//           <div className="mx-auto flex w-full max-w-[1180px] flex-col-reverse items-center justify-between text-center lg:flex-row lg:gap-5 lg:text-start 3xl:max-w-[1520px]">
//             <div>
//               <Title
//                 as="h2"
//                 className="mb-3 text-[22px] font-bold leading-snug sm:text-2xl md:mb-5 md:text-3xl md:leading-snug xl:mb-7 xl:text-4xl xl:leading-normal 2xl:text-[40px] 3xl:text-5xl 3xl:leading-snug">
//                 Welcome to Sazs Weigh-Bridge <br />
//                 Ultimate Dashboard.
//               </Title>
//               <Text className="mb-6 max-w-[612px] text-sm leading-loose text-gray-500 md:mb-8 xl:mb-10 xl:text-base xl:leading-loose">
//                 We have been spending long hours in order to launch our new website. Join our{' '}
//                 <br className="hidden sm:inline-block lg:hidden" /> mailing list or follow us on
//                 Facebook for get latest update.
//               </Text>
//             </div>
//             <div className="relative">
//               <img
//                 src={require('../assets/images/WeighBridge.png')}
//                 alt="coming-soon"
//                 className="aspect-[732/630] max-w-[256px] sm:max-w-xs lg:max-w-lg 2xl:max-w-xl 3xl:max-w-[632px]"
//               // className='p-5'
//               />
//               {/* <img
//               src={require('../assets/images/WeighBridge.png')}
//               alt="coming-soon"
//               className="absolute left-0 top-1/2 z-10 aspect-[275/390] max-w-[100px] -translate-y-1/2 lg:max-w-[210px]"
//             /> */}
//               <div className="mx-auto h-20 w-32 bg-gray-1000/50 blur-[57px] [transform:rotateX(80deg)]"></div>
//               <div className="absolute bottom-10 left-3 mx-auto h-20 w-32 bg-gray-1000/50 blur-[57px] [transform:rotateX(80deg)] lg:left-7"></div>
//             </div>
//           </div>
//         </div>
//         <SocialItems />
//       </div>
//       {/* <Sidebar/> */}
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { Text, Title } from 'rizzui'
import SocialItems from '../common/social-shares'
import Sidebar from './sidebar'


const Home = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-gray-50 p-0 m-0">
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-40 px-6 py-5 backdrop-blur-lg lg:backdrop-blur-none xl:px-10 xl:py-8">
          <div className='mx-auto flex max-w-[1520px] items-center'>
            <Link to={'/'}>
              <img
                style={{ width: 70 }}
                src={require('../assets/images/logo.png')}
                alt="fhf"
                className="dark:invert"
              />
            </Link>
          </div>
        </div>
        <div className="flex grow items-center px-6 xl:px-10">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col-reverse items-center justify-between text-center lg:flex-row lg:gap-5 lg:text-start 3xl:max-w-[1520px]">
            <div>
              <Title
                as="h2"
                className="mb-3 text-[22px] font-bold leading-snug sm:text-2xl md:mb-5 md:text-3xl md:leading-snug xl:mb-7 xl:text-4xl xl:leading-normal 2xl:text-[40px] 3xl:text-5xl 3xl:leading-snug">
                Welcome to Sazs Weigh-Bridge <br />
                Ultimate Dashboard.
              </Title>
              <Text className="mb-6 max-w-[612px] text-sm leading-loose text-gray-500 md:mb-8 xl:mb-10 xl:text-base xl:leading-loose">
                We have been spending long hours in order to launch our new website. Join our{' '}
                <br className="hidden sm:inline-block lg:hidden" /> mailing list or follow us on
                Facebook for the latest updates.
              </Text>
            </div>
            <div className="relative">
              <img
                src={require('../assets/images/WeighBridge.png')}
                alt="coming-soon"
                className="aspect-[732/630] max-w-[256px] sm:max-w-xs lg:max-w-lg 2xl:max-w-xl 3xl:max-w-[632px]"
              />
              <div className="mx-auto h-20 w-32 bg-gray-1000/50 blur-[57px] [transform:rotateX(80deg)]"></div>
              <div className="absolute bottom-10 left-3 mx-auto h-20 w-32 bg-gray-1000/50 blur-[57px] [transform:rotateX(80deg)] lg:left-7"></div>
            </div>
          </div>
        </div>
        <SocialItems />
      </div>
    </div>
  )
}

export default Home
