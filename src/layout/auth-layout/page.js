import AuthWrapperFour from './auth-wrapper-four';
import SignInForm from './login';




export default function SignInPage() {
  return (
    <AuthWrapperFour
      title={
        <>
          Welcome Back! <br /> Sign in with your credentials.
        </>
      }
      isSignIn
      isSocialLoginActive={true}
    >
      <SignInForm />
    </AuthWrapperFour>
  );
}
