import React, { Component } from 'react'
import{FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
import Title from "./Title"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free coctails",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            },
            {
                icon:<FaHiking/>,
                title:"lots of hiking",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle and travel",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            },
            {
                icon:<FaBeer/>,
                title:"best beer",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            }
        ]
    }
    render() {
        return (
            <section className='services'>
               <Title title="services"/>
               <div className="services-center">
                    {this.state.services.map((item,index)=>{
                         return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
               </div>   
            </section>
        )
    }
}
