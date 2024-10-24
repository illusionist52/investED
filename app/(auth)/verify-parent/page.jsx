'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { updateParentDetails } from '@/api/updateParentDetials';

const UpdateParentDetails = () => {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        const { parentName, password, confirmPassword } = data;

        // Check if passwords match
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        const parentEmail = 'nilanchalpanda2003@gmail.com';

        const response = await updateParentDetails(parentEmail, parentName, password);

        if (response.success) {
            setMessage('Parent details updated successfully! You can now move towards the "Parent Dashboard".');
            // Optionally redirect to the parent dashboard after a delay
            setTimeout(() => {
                router.push('/parent-portal'); // Adjust the path based on your routing
            }, 3000); // Redirect after 3 seconds
        } else {
            setMessage(response.message);
        }

        reset();
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded shadow">
                <h1 className="mb-6 text-center text-3xl font-semibold text-black">
                    Update Parent Details
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                            Parent Name
                        </label>
                        <input
                            type="text"
                            id="parentName"
                            {...register("parentName", { required: true })}
                            className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: true })}
                            className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        />

                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword", { required: true })}
                            className="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full rounded-md bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${isSubmitting ? 'opacity-50' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </form>
                {message && (
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpdateParentDetails;
