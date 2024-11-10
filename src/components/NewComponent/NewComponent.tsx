import React from 'react';

type NewComponentPropsType = {
    students: Array<StydentType>
}

type StydentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]


    return (
        <table>
            <tr>
                <th>manufacturer:</th>
                <th>model:</th>
            </tr>

            {topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}

        </table>
    );
};

