import { FaFacebookF } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import {
    FaGithub,
    FaInstagram,
    FaXTwitter,
} from 'react-icons/fa6';

export default function InfoSite() {
    const logos = [
        {
            logo: (
                <FaFacebookF className="rounded-full w-10 h-10 p-2 bg-white hover:bg-black hover:text-white transition-all duration-300 border border-gray-400" />
            ),
            link: '#',
            id: 1,
        },
        {
            logo: (
                <FaXTwitter className="rounded-full w-10 h-10 p-2 bg-white hover:bg-black hover:text-white transition-all duration-300 border border-gray-400" />
            ),
            link: '#',
            id: 2,
        },
        {
            logo: (
                <FaInstagram className="rounded-full w-10 h-10 p-2 bg-white hover:bg-black hover:text-white transition-all duration-300 border border-gray-400" />
            ),
            link: '#',
            id: 3,
        },
        {
            logo: (
                <FaGithub className="rounded-full w-10 h-10 p-2 bg-white hover:bg-black hover:text-white transition-all duration-300 border border-gray-400" />
            ),
            link: '#',
            id: 4,
        },
    ];
    return (
        <div className="flex flex-col gap-4">
            <h2>
                <Logo />
            </h2>
            <p className="text-[11px]">
                We have clothes that suits your style and
                which you’re proud to wear. From women to
                men.
            </p>
            <div className="flex gap-2">
                {logos.map((item) => (
                    <button key={item.id}>
                        {item.logo}
                    </button>
                ))}
            </div>
        </div>
    );
}
