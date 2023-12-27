import RootLayout from "@/app/layout";
import Sidebar from "@/components/layout/Sidebar";
import { ReactElement } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <RootLayout>
            <div className="grid h-screen grid-cols-6 bg-gray-100">
                <Sidebar />
                {children}
            </div>
        </RootLayout>
    );
}
