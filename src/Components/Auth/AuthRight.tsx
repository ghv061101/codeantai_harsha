import { useState } from "react";
import { KeyIcon } from "@heroicons/react/20/solid"; // Adjusted to correct icon version
import { useNavigate } from "react-router-dom";

const AuthRight = () => {
    const [isSaas, setIsSaas] = useState(true);
    const navigate = useNavigate();

    const handleNavigation = ({path}) => {
        navigate(path);
    };

    return (
        <div className="flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4">
            <div className="bg-white flex flex-col rounded-xl w-full border">
                {/* Header Section */}
                <div className="border-b flex flex-col p-5 w-full gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <img src="/svg/logo.svg" alt="logo" />
                        <span className="font-light">CodeAnt AI</span>
                    </div>
                    <div className="flex justify-center text-2xl font-semibold mt-2">
                        Welcome to CodeAnt AI
                    </div>
                    {/* Toggle Buttons */}
                    <div className="bg-gray-100/70 border rounded-xl">
                        <button
                            className={`p-3 rounded-xl w-1/2 ${
                                isSaas ? "bg-[#1570EF] text-white" : ""
                            }`}
                            onClick={() => setIsSaas(true)}
                        >
                            SAAS
                        </button>
                        <button
                            className={`p-3 rounded-xl w-1/2 ${
                                isSaas ? "" : "bg-[#1570EF] text-white"
                            }`}
                            onClick={() => setIsSaas(false)}
                        >
                            Self Hosted
                        </button>
                    </div>
                </div>

                {/* Login Options */}
                <div className="flex flex-col p-5">
                    <div className="flex items-center justify-center w-full">
                        {isSaas ? (
                            <div className="flex flex-col items-center justify-center w-full gap-2 max-w-[400px]">
                                {["github", "bitbucket", "azure-devops", "gitlab"].map(
                                    (provider) => (
                                        <button
                                            key={provider}
                                            onClick={() => handleNavigation("/dashboard")}
                                            className="border flex items-center w-full gap-3 p-2 rounded-xl justify-center"
                                        >
                                            <img
                                                src={`/svg/${provider}.svg`}
                                                alt={provider}
                                                className="w-5"
                                            />
                                            Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                                        </button>
                                    )
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center w-full gap-2 max-w-[400px]">
                                <button
                                    onClick={() => handleNavigation("/dashboard")}
                                    className="border flex items-center w-full gap-3 p-2 rounded-xl justify-center"
                                >
                                    <img src="/svg/gitlab.svg" alt="gitlab" className="w-5" />
                                    Sign in with GitLab
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard")}
                                    className="border flex items-center w-full gap-3 p-2 rounded-xl justify-center"
                                >
                                    <KeyIcon className="w-5" />
                                    Sign in with SSO
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div>
                <span>
                    By signing up you agree to the <b>Privacy Policy</b>.
                </span>
            </div>
        </div>
    );
};

export default AuthRight;
