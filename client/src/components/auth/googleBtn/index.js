import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAppDispatch } from "../../../store/hooks";
import { createGoogleUser } from "../../../store/slices/user";

const GoogleBtn = () => {
  const dispatch = useAppDispatch();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    if (token) {
      const user = await jwt_decode(token);
      dispatch(createGoogleUser(user));
      localStorage.setItem("token", token);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <GoogleOAuthProvider clientId="882573055807-qiktm85k4i0mbhnjrbk3c7o7pore3igm.apps.googleusercontent.com">
      <GoogleLogin
        size="large"
        text="signup_with"
        width="364px"
        theme="outline"
        logo_alignment="center"
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleBtn;
