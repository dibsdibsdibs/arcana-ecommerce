
export default function ButtonPress({
    onPress,
    label,
}: {
    onPress: any,
    label: string,
}) {
    return (
        <button className="bg-mint rounded-3xl flex px-8 py-2" onClick={onPress}>
            <span className="text-black text-sm font-black">
                {label}
            </span>
        </button>
    )
}
