import HeadOfFooter from './HeadOfFooter';
import InfoSite from './InfoSite';
import Navigator from './Navigator';

export default function Footer() {
    const navFooter = [
        [
            'Company',
            ['About', 'Features', 'Works', 'Career'],
        ],
        [
            'Help',
            [
                'Customer Support',
                'Delivery Details',
                'Terms & Conditions',
                'Privacy Policy',
            ],
        ],
        [
            'FAQ',
            [
                'Account',
                'Manage Deliveries',
                'Orders',
                'Payments',
            ],
        ],
        [
            'Resources',
            [
                'Free eBooks',
                'Development Tutorial',
                'How to - Blog',
                'Youtube Playlist',
            ],
        ],
    ];
    return (
        <div className="relative ">
            <HeadOfFooter />
            <div className=" w-full bg-primary-gray">
                <div className="flex max-lg:flex-col max-lg:items-start items-center pt-52 max-w-310 gap-8 container">
                    <div className="max-w-64">
                        <InfoSite />
                    </div>
                    <div className="flex flex-grow max-lg:flex-wrap w-full justify-between gap-8 items-center *:max-w-64">
                        {navFooter.map((list, index) => (
                            <Navigator
                                key={index}
                                title={list[0]}
                                list={list[1]}
                            />
                        ))}
                    </div>
                </div>
                <div className=" max-w-310 container">
                    <div className="bg-gray-300 h-0.5 w-full my-5"></div>
                    <div className="pb-5 text-slate-600">
                        Shop.co © 2000-2025, All Rights
                        Reserved
                    </div>
                </div>
            </div>
        </div>
    );
}
