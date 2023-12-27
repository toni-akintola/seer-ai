import React from "react";
import {
    DocumentTextIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    CreditCardIcon,
} from "@heroicons/react/20/solid";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const items = [
    {
        name: "Home",
        href: "/product",
        icon: <HomeIcon className="h-8 w-8 text-white" />,
    },
    {
        name: "New Summary",
        href: "/product/new-summary",
        icon: <PencilSquareIcon className="h-8 w-8 text-white" />,
    },
    {
        name: "Summaries",
        href: "/product/summaries",
        icon: <DocumentTextIcon className="h-8 w-8 text-white" />,
    },
    {
        name: "About",
        href: "/",
        icon: <QuestionMarkCircleIcon className="h-8 w-8 text-white" />,
    },
    {
        name: "Buy More Credits",
        href: "/product/transaction",
        icon: <CreditCardIcon className="h-8 w-8 text-white" />,
    },
];

const Sidebar: React.FunctionComponent = () => {
    return (
        <div className="grid h-full flex-col space-y-24 rounded-sm border-r border-gray-900/10 bg-teal-400 px-4 py-4">
            <Link href="/">
                <CpuChipIcon className="h-16 w-16 text-white" />
            </Link>
            <div className="flex flex-col justify-center space-y-3 rounded-md bg-teal-500">
                {items.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex w-full flex-row items-center space-x-5 rounded-md bg-teal-500 p-2 hover:bg-teal-900 "
                    >
                        {item.icon}
                        <p className="text-base font-extrabold text-white">
                            {item.name}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col justify-center space-y-3 self-end rounded-md bg-teal-500">
                <Link
                    className="flex w-full flex-row items-center space-x-5 rounded-md bg-teal-500 p-2 hover:bg-teal-900 "
                    href="/"
                >
                    <Cog6ToothIcon className="h-8 w-8 text-white" />
                    <p className="text-base font-semibold text-white">
                        Settings
                    </p>
                </Link>
                <Link
                    className="flex w-full flex-row items-center space-x-5 rounded-md bg-teal-500 p-2 hover:bg-teal-900 "
                    href="/"
                >
                    <img
                        className="inline-block h-8 w-8 rounded-full"
                        width={8}
                        height={8}
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                    />
                    <p className="text-base font-semibold text-white">
                        Toni Akintola
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
