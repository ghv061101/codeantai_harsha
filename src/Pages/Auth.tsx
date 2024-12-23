import AuthLeft from "../Components/Auth/AuthLeft.tsx"
import AuthRight from "../Components/Auth/AuthRight.tsx";
const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <AuthLeft />
            <AuthRight />
        </div>
    );
};

export default Auth;