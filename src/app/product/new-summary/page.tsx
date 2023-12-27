import RawForm from "@/components/forms/RawForm";
import React from "react";

export interface Props {}

const NewSummary = (props: Props) => {
    return (
        <div className="col-span-5 m-5 grid">
            <RawForm />
        </div>
    );
};

export default NewSummary;
