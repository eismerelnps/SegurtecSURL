import React from 'react'
//import headerPhoto from ''

export const Header = () => {
  //const url1 ='../static/card-segurtec.png'
  //const url2 = "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/327954767_515179707393926_6599493625946629431_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=i3slHp18VawAX-Mma3u&_nc_ht=scontent-bog1-1.xx&oh=00_AfBA8dJlyVRPTavdC41tgD_FbmcflQhU9-xGq2wWQE9QKQ&oe=6448A565"
  return (
    <div className='header'>
   <img className='company-img'
       src={require('../photos/card-segurtec.png')}
        alt="Company Logo"
      />
</div>
  )
}


