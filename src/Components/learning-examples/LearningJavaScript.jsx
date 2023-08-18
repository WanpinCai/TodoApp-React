const person = {
    name: "Wanpin",
    // address:"123 Dublin"
    address: {
        line1: "Street",
        city: "Dublin",
        country: "Ireland"
    },
    profiles: ["twitter","linkedin", "instagram"],
    printProfile: () => {
        person.profiles.map(
            profile =>  console.log(profile)
        )
        // console.log(person.profiles[0])
    }
}


export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{ person.printProfile() }</div>
        </>
    )
}