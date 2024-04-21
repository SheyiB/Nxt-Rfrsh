import { Metadata } from 'next';

import { lusitana } from '@/app/ui/fonts';

import { CreateUser } from '@/app/ui/admin/buttons';

export const metadata: Metadata = {
    title: 'Admin',
}

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  ">
            <h1 className={`${lusitana.className} text-2xl text-center`}>Admin Page</h1>
            <div className="mt-4 md:mt-8">
                <div className="mx-auto">
                    <CreateUser />
                </div>
            </div>
        </div>
    );
}