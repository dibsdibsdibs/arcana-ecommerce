
export function AboutUs({
    aboutUsImage,
}: {
    aboutUsImage: string,
}) {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div className="flex flex-col w-100 px-36 mb-56">
            <h1 className="font-italianoldstyle font-black text-4xl text-black mb-5">about us</h1>
            <div className="bg-green flex flex-row items-center justify-center py-5 pl-5 pr-72">
                <span className="font-ibmplexmono font-bold text-black text-md">{description}</span>
                <div className="w-56 absolute right-48">
                    <img src={aboutUsImage} alt="about us" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
