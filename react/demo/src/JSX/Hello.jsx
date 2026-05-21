// jsx vs js : 0.1S faster 
// jsx :  javascript syntax xml 
// jsx : html read and wriiten
// class :  ClassName 
// return file js : {} 


import React from 'react'

function Hello() {

    console.log("hello jsx")
    let data = "shubham"
    console.log(data)

    let person = {
        name : "raj",
        age : 23,
        coruse : "Front-end"
    }

    console.log(person)

    let htmldata = <ul>
        <li>one</li>
        <li>two</li>
        <li>sfasdf</li>
    </ul>


    return (
        <>
            <h1>hello this Jsx Fille</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, tempore sequi est praesentium cum error perspiciatis debitis dignissimos aliquid ullam delectus quam asperiores aperiam? Repudiandae ullam voluptatibus iusto maxime consectetur?</p>
            <h2>Name : {data}</h2>

            {
                5+10
            }

            <h1>Name : {person.name} Coruse : {person.coruse}</h1>
            
            {htmldata}

        </>
    )
}

export default Hello
