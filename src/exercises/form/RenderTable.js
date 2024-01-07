import React from "react";

const RenderTable = ({records}) => {
    console.log("Render Table records", records);
    return (
        <table>
            <thead>
                <tr>
                    <th> First Name</th>
                    <th> Email </th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, indx) => {
                    return(<tr key={indx}>
                        <td>{record['firstName']}</td>
                        <td>{record['email']}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}

export default RenderTable;