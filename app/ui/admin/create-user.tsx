'use client';

import Link from 'next/link';
import {
    UserIcon,
    UserPlusIcon,
    KeyIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createUser, initialState)

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6 ">
                {/* User Full Name */}
                <div className="mb-4">
                    <label htmlFor="fullname" className="mb-2 block text-sm font-medium">
                        Full-Name
                    </label>
                    <div className="relative">
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Enter User Full Name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="fullname-error"
                        />
                        <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>

                    <div id="fullname-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.fullname &&
                            state.errors.fullname.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* User Email */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter User Email"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="email-error"
                            />
                            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="email-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.email &&
                                state.errors.email.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>

                {/** User Password  */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Password
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter User Password"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="password-error"
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="password-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.password &&
                                state.errors.password.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>



            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/admin"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create User</Button>
            </div>
        </form>
    );
}
