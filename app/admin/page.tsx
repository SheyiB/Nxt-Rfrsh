import { Metadata } from 'next';

import { lusitana } from '@/app/ui/fonts';

import { CreateUser } from '@/app/ui/admin/buttons';

import Table from '@/app/ui/admin/table';

export const metadata: Metadata = {
    title: 'Admin',
}

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen mt-10  ">

            <h1 className={`${lusitana.className} text-2xl text-center`}>Users</h1>
            <div className="mt-4 md:mt-8">
                <div className="mx-auto">

                </div>
                <div className=" flex flex-col items-center">
                    <Table />
                    <CreateUser />
                </div>
            </div>
        </div>
    );
}