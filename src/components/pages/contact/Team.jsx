import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'
import team from './team-data'

const Team = () => {
  return (
    <div>
      <section className="team">
      <div className="container max-w-[410px] px-[8px] py-14 mx-auto m-0 lg:max-w-[1300px] lg:mx-auto">
        <div className="team-wrapper">

            <div className="head text-center">
                <Headings label="GET TO KNOW US"/>
                <Header label="Our Dedicated Team"/>
            </div>
            
            <div className="card-wrapper grid grid-cols-1 gap-5 mt-[32px] lg:mt-[37px] mb-[25px] lg:grid-cols-2 xl:grid-cols-3 lg:max-w-[900px] lg:mx-auto">
                {team.map((person, key) =>{
                    return(
                        <div className="card text-center" key={key}>
                            <img src={person.image}
                             alt="team-image" className='mx-auto mb-[20px]' />
                            <h4 className="name text-[16px] text-[#3e9bd0] font-semibold" >{person.name}</h4>
                            <small className="occupation text-[11px] italic block text-[#3A3B36] mt-[4px] mb-[2px]">{person.occupation}</small>
                            <a href="#" className="email text-[12px] text-[#3e9bd0]">{person.email}</a>
                        </div>
                    )
                })}
                
            </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Team
