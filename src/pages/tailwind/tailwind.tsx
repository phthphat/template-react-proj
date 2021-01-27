import React, { useState } from 'react'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
import Chatcontent from './components/chat-content'
import ListThumbnail from './components/list-thumbnail'
// import style from './tailwind.module.scss'

var leftSideBarData = [
  {
    id: 1, name: "ABC", shortMsg: "alo alo", isChosen: true
  },
  {
    id: 2, name: "DEF", shortMsg: "yoyoyo", isChosen: false
  },
  {
    id: 3, name: "GHI", shortMsg: "ahuhuhu", isChosen: false
  }
]

const Tailwind = React.memo(() => {
  console.log("tailwind rendered")

  const [data, setData] = useState(leftSideBarData)
  const [id, setId] = useState(leftSideBarData[0].id)

  const handleClick = (id: number) => {
    setId(id)
    setData(arr => arr.map(val => {
      return {
        ...val, isChosen: val.id === id ? true : false
      }
    }))
  }


  return <FullWidthLayout title="Chat using tailwind" className="relative">
    <div id="tailwind"
      className="flex w-full h-full"
      style={{ height: 400 }}
    >
      <ListThumbnail data={data} handleClick={handleClick} />
      <div className="w-full flex flex-col justify-between">
        <Chatcontent />
        <div className="flex p-2 border border-gray-500 items-center justify-between">
          <input className=" w-full mr-2 p-1 border border-gray-500 rounded-full" placeholder="Your message" />
          <button className="bg-blue-500 w-6 h-6" />
        </div>
      </div>
    </div>
    <div className="bg-red-200 text-center">
      Messenger clone
    </div>
  </FullWidthLayout>
})

export default Tailwind