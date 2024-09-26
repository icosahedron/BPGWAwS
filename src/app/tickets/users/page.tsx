import { IconUserOff, IconCheck } from "@tabler/icons-react";

type User = {
    name : string,
    job : string,
    isAvailable : boolean,
}

const users : User[] = [
    {
      "name": "Alice Johnson",
      "job": "Software Engineer",
      "isAvailable": true
    },
    {
      "name": "Bob Smith",
      "job": "Product Manager",
      "isAvailable": false
    },
    {
      "name": "Charlie Davis",
      "job": "UX Designer",
      "isAvailable": true
    },
    {
      "name": "Diana Roberts",
      "job": "Data Analyst",
      "isAvailable": false
    },
    {
      "name": "Ethan Williams",
      "job": "DevOps Engineer",
      "isAvailable": true
    }
];

export default function UserList() {
    users.forEach((user) => console.log(JSON.stringify(user)));

    return (
        <table>
            <thead>
                <tr><th>Name</th><th>Job</th></tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.name}>
                        <td style={{ color: user.isAvailable ? undefined : "red" }}>
                            <span style={{ display: "inline-flex", alignItems: "center" }}>
                                    {user.isAvailable ? <IconCheck style={{ display: "inline-block", marginRight: "8px" }} /> : <IconUserOff style={{ display: "inline-block", marginRight: "8px" }} />}
                                    {user.name}
                            </span>
                        </td>
                        <td>{user.job}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

