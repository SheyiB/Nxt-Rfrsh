import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';
import { SunIcon } from '@heroicons/react/24/outline';



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64   ">
                <SideNav />
            </div>
            <div className=" flex-grow p-6 md:overflow-y-auto md:p-12  ">{children}

                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3  ">
                    <SunIcon className="w-6" />
                    <div className="  hidden md:block">Switch Theme</div>
                </button>

            </div>

        </div>
    );
}