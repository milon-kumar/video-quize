import React, {Fragment} from 'react';

const User = ({ users }) => {
    return (
        <Fragment>
            <div className="my-4">
                <h3 className="text-3xl font-semibold">All Users</h3>
            </div>
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-dark">
                    <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #SL
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.data && users.data.map((user,key)=>(
                            <tr key={key} className="bg-white border-b">
                                <td className="px-6 py-4">
                                    {key+1}
                                </td>
                                <th scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap">
                                    {user.name ?? "User Name"}
                                </th>
                                <td className="px-6 py-4">
                                    {user.email ?? "User Email Address"}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#"
                                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                        className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                        className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        {
                            users.links.map((link,key)=>(
                                <li key={key}>
                                    <a href={link.url}
                                       className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{link.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </Fragment>
);
};

export default User;
