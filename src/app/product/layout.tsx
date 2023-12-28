import RootLayout from "@/app/layout";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <RootLayout>
            <Navbar />
            <div className="grid h-screen grid-cols-6 bg-gray-100 lg:grid-cols-8">
                <Sidebar />
                    {children}
            </div>
        </RootLayout>
    );
}
