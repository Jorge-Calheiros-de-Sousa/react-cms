import { useState, useEffect } from "react";

import Admin from "@Layouts/Private/Admin";

import UserService from "@Services/UserService";

function User() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [data, error] = await UserService.index();

            if (!error) {
                const { users: { data: userData } } = data;
                setUser(userData);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <Admin>
                <h1>Tela de usuários</h1>

                <fieldset>
                    <legend>List of User</legend>
                    <ul>
                        {
                            users.map(user => (
                                <li> {user.name} </li>
                            ))
                        }
                    </ul>
                </fieldset>
            </Admin>
        </div>
    )
}

export default User;