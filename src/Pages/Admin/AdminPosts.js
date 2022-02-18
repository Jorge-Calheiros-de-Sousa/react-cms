import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Admin from "../../Layouts/Private/Admin";
import PostService from "../../Services/PostService";

function AdminPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [data, error] = await PostService.index();

            if (!error) {
                setPosts(data.posts.data);
            }
        }
        fetchData();
    }, [])

    function deletePost(event) {
        const id_post = event.target.getAttribute("id-post");
        const fetchDelete = async () => {
            const [data, error] = await PostService.destroy(id_post);
            if (!error) {
                alert("Post deletado com sucesso");
                window.location.href = "/admin/posts"
            }
        }
        fetchDelete();
    }

    return (
        <Admin>
            <div className="flex">
                <NavLink to={"/admin/post/create"}>
                    <div className="p-2 cursor-pointer m-2 bg-blue-600 hover:bg-blue-900 text-white">
                        Create Post
                    </div>
                </NavLink>

            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        posts.map((post, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {post.id}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <div className="text-sm text-gray-500">
                                                        {post.title}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center">
                                                    <NavLink to={`/admin/post/${post.id}`}>
                                                        <div className="text-green-600 hover:text-green-900">
                                                            Read
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to={`/admin/post/update/${post.id}`}>
                                                        <div className="ml-5 text-indigo-600 hover:text-indigo-900">
                                                            Edit
                                                        </div>
                                                    </NavLink>
                                                    <div className="ml-5 text-red-600 hover:text-red-900" onClick={deletePost} id-post={post.id}>
                                                        Delete
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <ul className="flex pl-0 list-none rounded my-2">
                                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"><a className="page-link" href="#">Previous</a></li>
                                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a className="page-link" href="#">1</a></li>
                                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a className="page-link" href="#">2</a></li>
                                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a className="page-link" href="#">3</a></li>
                                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Admin >
    )
}
export default AdminPosts;