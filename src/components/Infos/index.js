import './styles.scss';
import { useEffect, useState } from 'react'
import axios from 'axios'

function Infos() {
    const [people, setPeople] = useState()
    const [number, setNumber] = useState()


    useEffect(() => {
        axios.get('http://api.open-notify.org/astros.json').then(item => {
            setPeople(item.data.people)
            setNumber(item.data.number)
        })
    }, [])

    return (
        <div className="infosWrapper">
            <div className="numberWrapper">
                <h1>
                    Number of people aboard :
                </h1>
                <p>{number}</p>
            </div>
            <div className="peoplesWrapper">
                <h1>
                    People aboard :
                </h1>
                {people && people.map(item => { return <p>{item.name}</p> })}
            </div>

        </div>
    );
}

export default Infos;
