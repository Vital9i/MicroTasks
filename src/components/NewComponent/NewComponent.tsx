import React from 'react';

type NewComponentsPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}


export const NewComponent = () => {
    const topCars = [
        { manufacturer: 'BMW', model: 'X5' },
        { manufacturer: 'Mersedes', model: 'MLS' },
        { manufacturer: 'Audi', model: 'Q7' }
    ]
    return (
        <table>
            <tr>
                {topCars.map((car, index) => {
                    return (
                        <th key={index}>{car.manufacturer}</th>
                    )
                })}

            </tr>
            <tr>
                {topCars.map((car, index) => {
                    return(
                    <td key={index}>{car.model}</td>
                )})}
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    );
};


// <ul>
//     {props.students.map((item) => {
//         debugger
//         return (
//             <li key={item.id}>
//                 <span>{item.name}</span>
//                 <span> age: {item.age}</span>
//             </li>
//         )
//     })}
// </ul>