export default function IncDecBtn({
    className,
    action,
    setChosen,
    chosen,
    children,
}) {
    function clickHandler() {
        action == '+'
            ? setChosen(chosen + 1)
            : setChosen(chosen - 1);
    }

    return (
        <button
            className={`size-8 flex justify-center items-center max-sm:hidden hover:bg-black hover:text-white transition-all duration-300 rounded-full`}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}
