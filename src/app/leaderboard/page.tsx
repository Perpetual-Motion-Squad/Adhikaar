'use client'
import { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const Page = () => {

    // model Party {
    //   id      String @id @default(auto()) @map("_id") @db.ObjectId
    //   name    String
    //   logo    String
    //   members Json[]
    //   slogan  String
    // }

    const sortedPartyData = [
        {id  : 1, name: 'BJP', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png', members: [], slogan: 'Sabka Saath, Sabka Vikas', votes: 100}, 
        {id  : 2, name: 'Congress', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Indian_National_Congress_logo.svg/1200px-Indian_National_Congress_logo.svg.png', members: [], slogan: 'Congress Ka Haath, Aam Aadmi Ke Saath', votes : 50},
        {id  : 3, name: 'AAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Aam_Aadmi_Party_logo.svg/1200px-Aam_Aadmi_Party_logo.svg.png', members: [], slogan: 'Bharosa Party', votes: 25},
        {id  : 4, name: 'Shiv Sena', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Shiv_Sena_logo.svg/1200px-Shiv_Sena_logo.svg.png', members: [], slogan: 'Bharosa Party', votes: 10},
        {id  : 5, name: 'TMC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/All_India_Trinamool_Congress_logo.svg/1200px-All_India_Trinamool_Congress_logo.svg.png', members: [], slogan: 'Bharosa Party', votes: 5},
    ]

    const colorData = [
        '#E63946',
        '#F1FAEE',
        '#A8DADC',
        '#457B9D',
        '#1D3557'
    ]

    const PieChartData = sortedPartyData.map((party, i) => {
        return {
            title: party.name,
            value: party.votes,
            color: colorData[i]
        }
    })

  return (
    <div className='w-11/12 mx-auto flex flex-col py-4 bg-[#FFF3D1] h-full px-4 rounded-2xl my-4'>
        <h1 className='text-[#780000] font-black text-4xl'>
            Leaderboard
        </h1>
        <div className='flex flex-col lg:flex-row gap-2 py-4'>
            {/* This section will contain the leaderboard */}
            <section className='flex flex-col gap-4 mt-4 w-full lg:w-2/3'>
                <div className='flex flex-col gap-2'>
                    {sortedPartyData.map((party, i) => {
                        return (
                            <div key = {i} className='text-2xl flex flex-row justify-between text-[#003049]'>
                                <span>
                                    <span className= 'font-black text-xl'>{i + 1}. </span>
                                    <span className='text-[#780000] font-extrabold'>{party.name}</span>
                                </span>
                                <span className='font-black'>
                                    {party.votes}
                                </span>

                            </div>
                        )
                    })}
                </div>

            </section>
            {/* This section will contain a pie chart of party data */}
            <section className='flex  gap-4 mt-4 w-full lg:w-1/3 justify-center items-center'>
                {/* create a pie chart from votes in sortedPartyData */}
                <div className='h-5/6 aspect-square'>
                    <PieChart data={PieChartData} />
                </div>
                <div>
                    Legend : 
                    <ul className='flex flex-col gap-1'>
                        {sortedPartyData.map((party, i) => {
                            return (
                                <li key={i} className='flex flex-row gap-1'>
                                    <div className='w-4 h-4 rounded-full' style={{backgroundColor: colorData[i]}}></div>
                                    <span>{party.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>



    </div>
  )
}

export default Page