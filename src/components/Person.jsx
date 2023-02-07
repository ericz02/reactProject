const Person = ({firstName, lastName}) => {

    // first way
    // const firstName = props.firstName;
    // const lastName = props.lastName;

    // second way
    // const {firstName, lastName} = props;

    return (
        <p>
            Hello {firstName} {lastName}
        </p>
    )
        
}
// default if nothing is written
Person.defaultProps = {
    firstName: 'Ye without a name'
}

export default Person;