function Developer ({name, age, country}){
    return (
        <div className="dev">
            <h2>Dev: {name}</h2>
            <p>Idade: {age}</p>
            <p>País: {country}</p>
        </div>
    )
}

export default Developer;