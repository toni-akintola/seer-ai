import React from "react";

type Props = {};

const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
        name: "Material",
        description:
            "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
        name: "Finish",
        description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
        name: "Considerations",
        description:
            "Made from natural materials. Grain and color vary with each item.",
    },
];

const Product = (props: Props) => {
    return (
        <div className="col-span-4 grid h-screen grid-cols-4 border-gray-300 lg:col-span-7">
            <div className="col-span-2 m-4 mx-auto grid max-w-2xl justify-center rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Transcript
                </h2>
                <p className=" text-gray-500">
                    The walnut wood card tray is precision milled to perfectly
                    fit a stack of Focus cards. The powder coated steel divider
                    separates active cards from new ones, or can be used to
                    archive important task lists.
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="border-t border-gray-200 pt-4"
                        >
                            <dt className="font-medium text-gray-900">
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                {feature.description}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="col-span-2 m-4 mx-auto grid max-w-2xl justify-center rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Summary
                </h2>
                <p className=" text-gray-500">
                    The walnut wood card tray is precision milled to perfectly
                    fit a stack of Focus cards. The powder coated steel divider
                    separates active cards from new ones, or can be used to
                    archive important task lists.
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="border-t border-gray-200 pt-4"
                        >
                            <dt className="font-medium text-gray-900">
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                {feature.description}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Product;
