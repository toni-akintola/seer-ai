import RootLayout from "@/app/layout";
import Sidebar from "@/components/layout/Sidebar";
import { ReactElement } from "react";


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
   return (
        <RootLayout>
            <div className='bg-gray-100 grid-cols-5 grid h-screen'>
                <Sidebar/>
                {children}
            </div>
        </RootLayout>
    )
}
