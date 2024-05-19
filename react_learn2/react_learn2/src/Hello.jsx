function Hello(){
    let name = 'Suresh';
    let age = 30;
    let fullName = () => {
        return 'Suresh Lama '
    }
    return <h3>
        Hello everyone this is h3 jsx. Writtern by {name}. And age is {age} and fullname is: {fullName()}
    </h3>
}

export default Hello;