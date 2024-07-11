// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import PropTypes from 'prop-types';
// // import { MenuItems } from './menu-items';

// // const Sidebar = ({ className }) => {
// //   return (
// //     <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col p-4 overflow-y-auto ${className}`}>
// //       <div className="flex items-center mb-6">
// //         <img
// //           style={{ width: 50 }}
// //           src={require('../assets/images/logo.png')}
// //           alt="Logo"
// //           className="dark:invert"
// //         />
// //         <span className="ml-3 text-xl font-bold">Sazs Weigh-Bridge</span>
// //       </div>
// //       <nav className="flex-grow">
// //         <ul>
// //           {MenuItems.map((item, index) => (
// //             <React.Fragment key={index}>
// //               {item.dropdownItems ? (
// //                 <li className="mb-2">
// //                   <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-stone-400">
// //                     {item.icon} {item.name}
// //                   </div>
// //                   <ul className="pl-4">
// //                     {item.dropdownItems.map((dropdownItem, idx) => (
// //                       <li key={idx} className="mb-2">
// //                         <Link to={dropdownItem.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-stone-400">
// //                           {dropdownItem.icon} {dropdownItem.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </li>
// //               ) : (
// //                 <li className="mb-2">
// //                   <Link to={item.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-stone-400">
// //                     {item.icon} {item.name}
// //                   </Link>
// //                 </li>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // Sidebar.propTypes = {
// //   className: PropTypes.string,
// // };

// // Sidebar.defaultProps = {
// //   className: '',
// // };

// // export default Sidebar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AiFillHome } from 'react-icons/ai';
// import { PiTableDuotone, PiFolderNotchDuotone } from 'react-icons/pi';
// import PropTypes from 'prop-types';

// export const MenuItems = [
//   {
//     name: 'Pages',
//   },
//   {
//     name: 'Home',
//     href: '/',
//     icon: <AiFillHome />,
//   },
//   {
//     name: 'Customer Management',
//     href: '#',
//     icon: <PiTableDuotone />,
//     dropdownItems: [
//       {
//         name: 'Create Customer',
//         href: '/customer/create',
//         icon: <PiFolderNotchDuotone />,
//       },
//       {
//         name: 'Customers List',
//         href: '/list/customers',
//         icon: <PiFolderNotchDuotone />,
//       },
//       {
//         name: 'Customer Statement',
//         href: '/customer/report',
//         icon: <PiFolderNotchDuotone />,
//       },
//       {
//         name: 'Outstanding Customer',
//         href: '/customer/outstanding',
//         icon: <PiFolderNotchDuotone />,
//       },
//     ],
//   },
//   // Add other menu items here
// ];

// const Sidebar = ({ className }) => {
//   return (
//     <div className={`fixed inset-y-0 left-0 w-64 bg-stone-800 text-white flex flex-col p-4 overflow-y-auto ${className}`}>
//       <div className="flex items-center mb-6">
//         <img
//           style={{ width: 50 }}
//           src={require('../assets/images/logo.png')}
//           alt="Logo"
//           className="dark:invert"
//         />
//         <span className="ml-3 text-xl font-bold">Sazs Weigh-Bridge</span>
//       </div>
//       <nav className="flex-grow">
//         <ul>
//           {MenuItems.map((item, index) => (
//             <React.Fragment key={index}>
//               {item.dropdownItems ? (
//                 <li className="mb-2">
//                   <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-stone-400">
//                     {item.icon} {item.name}
//                   </div>
//                   <ul className="pl-4">
//                     {item.dropdownItems.map((dropdownItem, idx) => (
//                       <li key={idx} className="mb-2">
//                         <Link to={dropdownItem.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-stone-400">
//                           {dropdownItem.icon} {dropdownItem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ) : (
//                 <li className="mb-2">
//                   <Link to={item.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-stone-400">
//                     {item.icon} {item.name}
//                   </Link>
//                 </li>
//               )}
//             </React.Fragment>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   className: PropTypes.string,
// };

// Sidebar.defaultProps = {
//   className: '',
// };

// export default Sidebar;


import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { PiTable, PiFolder, PiCaretDownBold } from 'react-icons/pi';
import SimpleBar from 'simplebar-react';
import { Collapse } from 'rizzui';
import cn from 'classnames';
import { MenuItems } from './menu-items';
// import PropTypes from 'prop-types';

const Sidebar = ({ className }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside
      className={cn(
        'fixed bottom-0 start-0 z-50 h-screen w-[270px] border-e-2 border-gray-100 text-white bg-stone-800 dark:bg-gray-100/50 2xl:w-72 overflow-y-auto custom-scrollbar',
        className
      )}>
      {/* <div className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
        <Link to="/" aria-label="Site Logo">
          <img src={require('../assets/images/logo.png')} alt="Logo" className="max-w-[155px]" />
        </Link>
      </div> */}
      <div className="flex items-center mb-6 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
        <Link to="/" aria-label="Site Logo">
          <img
            style={{ width: 50 }}
            src={require('../assets/images/logo.png')}
            alt="Logo"
            className="dark:invert"
          />
          </Link>
         <span className="ml-3 text-xl font-bold">Sazs Weigh-Bridge</span>
       </div>

      <SimpleBar className="h-[calc(100%-80px)]">
        <div className="mt-4 pb-3 3xl:mt-6">
          {MenuItems.map((item, index) => {
            const isActive = pathname === (item?.href);
            const pathnameExistInDropdowns = item?.dropdownItems?.some(
              dropdownItem => dropdownItem.href === pathname
            );
            const isDropdownOpen = Boolean(pathnameExistInDropdowns);
            return (
              <Fragment key={item.name + '-' + index}>
                {item?.href ? (
                  <>
                    {item?.dropdownItems && item?.dropdownItems?.length ? (
                      <Collapse
                        defaultOpen={isDropdownOpen}
                        header={({ open, toggle }) => (
                          <div
                            onClick={toggle}
                            className={cn(
                              'group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2',
                              isDropdownOpen
                                ? 'before:top-2/5 text-red before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5'
                                : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700'
                            )}>
                            <span className="flex items-center">
                              {item?.icon && (
                                <span
                                  className={cn(
                                    'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                    isDropdownOpen
                                      ? 'text-red'
                                      : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                                  )}>
                                  {item?.icon}
                                </span>
                              )}
                              {!item?.icon && (
                                <span
                                  className={cn(
                                    'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                    isDropdownOpen
                                      ? 'text-red'
                                      : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                                  )}>
                                  <PiTable />
                                </span>
                              )}
                              {item.name}
                            </span>

                            <PiCaretDownBold
                              strokeWidth={3}
                              className={cn(
                                'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                                open && 'rotate-0 rtl:rotate-0'
                              )}
                            />
                          </div>
                        )}>
                        {item?.dropdownItems?.map((dropdownItem, index) => {
                          const isChildActive = pathname === (dropdownItem?.href );

                          return (
                            <Link
                              to={dropdownItem?.href ?? '#'}
                              key={dropdownItem?.name + index}
                              className={cn(
                                'mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
                                isChildActive
                                  ? 'text-primary'
                                  : 'text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900'
                              )}>
                              <div className="flex items-center truncate">
                                <span
                                  className={cn(
                                    'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                                    isChildActive
                                      ? 'bg-primary ring-[1px] ring-primary'
                                      : 'opacity-40'
                                  )}
                                />{' '}
                                <span className="truncate">{dropdownItem?.name}</span>
                              </div>
                              {dropdownItem?.badge?.length ? (
                                <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                                  {dropdownItem?.badge}
                                </span>
                              ) : null}
                            </Link>
                          );
                        })}
                      </Collapse>
                    ) : (
                      <Link
                        to={item?.href}
                        className={cn(
                          'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                          isActive
                            ? 'before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5'
                            : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90'
                        )}>
                        <div className="flex items-center truncate">
                          {item?.icon && (
                            <span
                              className={cn(
                                'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                isActive
                                  ? 'text-primary'
                                  : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                              )}>
                              {item?.icon}
                            </span>
                          )}
                          <span className="truncate">{item.name}</span>
                        </div>
                        {/* {item?.badge?.length ? <StatusBadge status={item?.badge} /> : null} */}
                      </Link>
                    )}
                  </>
                ) : (
                  <h6
                    className={cn(
                      'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8',
                      index !== 0 && 'mt-6 3xl:mt-7'
                    )}>
                    {item.name}
                  </h6>
                )}
              </Fragment>
            );
          })}
        </div>
      </SimpleBar>
    </aside>
  );
};

export default Sidebar;
