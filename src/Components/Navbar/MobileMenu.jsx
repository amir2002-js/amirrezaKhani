import Menu from './Menu';

export default function MobileMenu({
    changeMenuState,
    showMenu,
    isVisible,
}) {
    return (
        <>
            {isVisible && (
                <div
                    className={`fixed top-0 w-full h-svh flex z-50`}
                >
                    {/* link Nav */}
                    <div
                        className={`h-svh w-9/12 sm:w-5/12 fixed top-0 left-0 bg-primary-gray z-50 px-5 py-6 transform transition-all ease-in-out duration-300 ${
                            !showMenu
                                ? '-translate-x-full'
                                : '-translate-x-0'
                        } `}
                    >
                        <Menu
                            changeMenuState={
                                changeMenuState
                            }
                            showMenu={showMenu}
                        />
                    </div>

                    {/* close side menu */}
                    <div
                        className={`w-screen transition-all duration-300 ${
                            !showMenu
                                ? 'bg-black/0'
                                : 'bg-black/30'
                        }`}
                        onClick={() => changeMenuState()}
                    ></div>
                </div>
            )}
        </>
    );
}
