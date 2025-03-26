import loginBg from "@/public/images/loginbg.png";
import loginDivider from "@/public/images/logindivider.png";

export default function LoginScreen() {

    return (
        <div className="bg-cream d-flex items-center justify-center p-8">
            <span className="font-italianoldstyle text-4xl text-black">account login</span>
            {/* <img src={loginBg.src} alt="login-image" className="login-image-bg" /> */}
            <div className="login-container">
                <div className="w-1/2">
                    <img src={loginDivider.src} alt="login-divider" className="size-full object-cover" />
                </div>
                <div className="flex flex-col bg-white p-4 font-ibmplexmono w-1/2">
                    <span className="text-md text-black">ACCOUNT DETAILS</span>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="email address" className="text-black" />
                        <input type="password" placeholder="password" className="text-black" />
                    </div>
                </div>
            </div>
        </div>
    )
}
