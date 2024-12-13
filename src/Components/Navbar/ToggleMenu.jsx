import { PiList } from 'react-icons/pi';

export default function ToggleMenu({ changeMenuState }) {
    function clickHandler() {
        changeMenuState();
    }

    return (
        <button
            onClick={() => {
                clickHandler();
            }}
        >
            <PiList className="text-2xl lg:hidden" />
        </button>
    );
}
