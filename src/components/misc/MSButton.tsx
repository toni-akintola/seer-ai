import React from "react";

type Props = {};

const MSButton = (props: Props) => {
    return(
        <div className="flex w-full justify-center">
            <button
                aria-label="Microsoft Sign In"
                className="border-button-border-light flex items-center space-x-2 rounded-md border bg-white p-2 pr-3 w-3/4"
            >
                <div className="flex w-12 items-center justify-center rounded-l bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title><rect x="1" y="1" width="9" height="9" fill="#f25022"/><rect x="1" y="11" width="9" height="9" fill="#00a4ef"/><rect x="11" y="1" width="9" height="9" fill="#7fba00"/><rect x="11" y="11" width="9" height="9" fill="#ffb900"/></svg>
                </div>
                <span className="font-sans text-base tracking-wider text-gray-700">
                    Microsoft Sign In
                </span>
            </button>
        </div>
    );
};

export default MSButton;
