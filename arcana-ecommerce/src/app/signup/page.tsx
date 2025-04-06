"use client";
import loginBg from "@/public/images/loginbg.png";
import loginDivider from "@/public/images/logindivider.png";
import ButtonPress from "@/components/ButtonPress";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignUpScreen() {
    const router = useRouter();

    const handleSignUp = () => {
        console.log("Sign up button pressed");
    }

    const goToLogin = () => {
        router.push("/login");
    }

    return (
        <div className="bg-cream d-flex items-center justify-center px-32 py-16">
            <img src={loginBg.src} alt="login-image" className="absolute right-24 top-30 w-80 z-10" />
            <div className="">
                <span className="font-italianoldstyle text-4xl text-black font-black">account signup</span>
                <div className="grid grid-cols-2 z-20 relative">
                    <div>
                        <img src={loginDivider.src} alt="login-divider" className="size-full object-cover" />
                    </div>
                    <div className="bg-white p-12 font-ibmplexmono flex flex-col justify-between">
                        <div>
                            <span className="text-lg text-black font-black">ACCOUNT DETAILS</span>
                            <div className="flex flex-col gap-4 my-8">
                                <input type="text" placeholder="email address" className="text-black" required />
                                <input type="text" placeholder="confirm email address" className="text-black" required />
                                <input type="password" placeholder="password" className="text-black" required />
                                <input type="password" placeholder="confirm password" className="text-black" required />
                            </div>
                            <div className="items-center justify-items-center flex flex-col gap-4 mt-8">
                                <ButtonPress onPress={handleSignUp} label="SIGN UP" />
                                <span className="text-black text-sm">or sign up with</span>
                                <div className="flex gap-8">
                                    <button className="bg-mint p-2 rounded-md">
                                        <FaGoogle className="text-black" />
                                    </button>
                                    <button className="bg-mint p-2 rounded-md">
                                        <FaFacebook className="text-black" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm flex-end flex flex-row items-center justify-center">
                            <span className="text-black me-2 text-center">Have an account?</span>
                            <button onClick={goToLogin}>
                                <span className="text-mint text-center">Log In.</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
