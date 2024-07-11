// 'use client';

// import { Link } from 'react-router-dom';
// import { SubmitHandler } from 'react-hook-form';
// import { Password } from 'rizzui';
// import { Checkbox } from 'rizzui';
// // import { useMedia } from 'rizzui';
// import { Button } from 'rizzui';
// import { Input } from 'rizzui';
// // import { Form } from '@/components/ui/form';
// import { Text } from 'rizzui';



// import { z } from 'zod';

// // form zod validation schema
//  const loginSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(1),
//   rememberMe: z.boolean().optional(),
// });

// const initialValues = {
//   email: 'admin@admin.com',
//   password: 'admin',
//   rememberMe: true,
// };

// export default function SignInForm() {
// //   const isMedium = useMedia('(max-width: 1200px)', false);
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <form
//         validationSchema={loginSchema}
//         onSubmit={onSubmit}
//         useFormProps={{
//           mode: 'onChange',
//           defaultValues: initialValues,
//         }}
//       >
//         {({ register, formState: { errors } }) => (
//           <div className="space-y-5 lg:space-y-6">
//             <Input
//               type="email"
//               size={true ? 'lg' : 'xl'}
//               label="Email"
//               placeholder="Enter your email"
//               className="[&>label>span]:font-medium"
//               {...register('email')}
//               error={errors.email?.message}
//             />
//             <Password
//               label="Password"
//               placeholder="Enter your password"
//               size={true ? 'lg' : 'xl'}
//               className="[&>label>span]:font-medium"
//               {...register('password')}
//               error={errors.password?.message}
//             />
//             <div className="flex items-center justify-between pb-1">
//               <Checkbox
//                 {...register('rememberMe')}
//                 label="Remember Me"
//                 className="[&>label>span]:font-medium"
//               />
//               <Link
//                 to={'/'}
//                 className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <Button
//               className="w-full"
//               type="submit"
//               size={true ? 'lg' : 'xl'}
//             >
//               Sign In
//             </Button>
//           </div>
//         )}
//       </form>
//       <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
//         Don’t have an account?{' '}
//         <Link
//          to={'/'}
//           className="font-semibold text-gray-700 transition-colors hover:text-primary"
//         >
//           Sign Up
//         </Link>
//       </Text>
//     </>
//   );
// }



// 'use client';

// import { Link,useNavigate } from 'react-router-dom';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Password, Checkbox, Button, Input, Text } from 'rizzui';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useLocalStorage } from 'react-use';
// import { loginSchema,loginDefaultValues } from '../../types/login-schema';
// import axios from 'axios';

// export default function SignInForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: loginDefaultValues,
//   });

//   const [jwt] = useLocalStorage('auth');
//   const Navigate=useNavigate()

//   const onSubmit = (data) => {
//     console.log(data);
//     axios.post("http://localhost:5000/login", data)
//            .then((res) => {
//              if (res.data.Status === "success") {
//               Navigate("/");
//              } else {
//                alert(res.data.Error);
//              }
//            })
//            .then((err) => console.log(err));
//             console.log(data)
//             Navigate('/')
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="space-y-5 lg:space-y-6">
//           <Input
//             // type="email"
//             size="lg"
//             label="Email"
//             placeholder="Enter your email"
//             className="[&>label>span]:font-medium"
//             {...register('email')}
//             error={errors.email?.message}
//           />
//           <Password
//             label="Password"
//             placeholder="Enter your password"
//             size="lg"
//             className="[&>label>span]:font-medium"
//             {...register('password')}
//             error={errors.password?.message}
//           />
//           <div className="flex items-center justify-between pb-1">
//             <Checkbox
//               {...register('rememberMe')}
//               label="Remember Me"
//               className="[&>label>span]:font-medium"
//             />
//             <Link
//               to="/"
//               className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>
//           <Button
//             className="w-full bg-black text-white  hover:bg-slate-600"
//             type="submit"
//             size="lg"
//           >
//             Sign In
//           </Button>
//         </div>
//       </form>
//       <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
//         Don’t have an account?{' '}
//         <Link
//           to="/"
//           className="font-semibold text-gray-700 transition-colors hover:text-primary"
//         >
//           Sign Up
//         </Link>
//       </Text>
//     </>
//   );
// }



'use client';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Password, Checkbox, Button, Input, Text } from 'rizzui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalStorage } from 'react-use';
import { loginSchema, loginDefaultValues } from '../../types/login-schema';
import axios from 'axios';

export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });

  const [jwt, setJwt] = useLocalStorage('auth');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);
      if (res.data.Status === "success") {
        setJwt(res.data.token); // Save JWT token
        navigate("/");
      } else {
        alert(res.data.Error);
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 lg:space-y-6">
          <Input
            size="lg"
            label="User Name"
            placeholder="Enter your Name"
            className="[&>label>span]:font-medium"
            {...register('name')}
            // error={errors.email?.message}
          />
          <p className='p-0 m-0 text-red-600'>{errors.name?.message}</p>
          <Password
            label="Password"
            placeholder="Enter your password"
            size="lg"
            className="[&>label>span]:font-medium"
            {...register('password')}
            error={errors.password?.message}
          />
          <div className="flex items-center justify-between pb-1">
            <Checkbox
              {...register('rememberMe')}
              label="Remember Me"
              className="[&>label>span]:font-medium"
            />
            <Link
              to="/"
              className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            className="w-full bg-black text-white hover:bg-slate-600"
            type="submit"
            size="lg"
          >
            Sign In
          </Button>
        </div>
      </form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Don’t have an account?{' '}
        <Link
          to="/"
          className="font-semibold text-gray-700 transition-colors hover:text-primary"
        >
          Sign Up
        </Link>
      </Text>
    </>
  );
}
