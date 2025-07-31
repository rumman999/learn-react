import React, { useEffect, useState } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router'

function Github() {
const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/rumman999')
    return response.json() 
}