import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseCard() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            // console.log(res.data)
            setcard(res.data)
        } catch (error) {
            console.log("api data not Found", error)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        card && card.map((data, index) => {
                            // console.log(data)
                            return (
                                <div className="col" key={index}>
                                    <div className="card">
                                        <img src={data.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <h5 className="card-title">{data.price}$</h5>
                                            <p className="card-text">{data.description.slice(0,100)}...</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default UseCard
