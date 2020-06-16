import React from 'react'

const HeaderCrumb = (props) => {
  let { title = '' } = props
  return (
   <div>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/DashboardDefault">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
     </nav>
     {/* <h1>{title}</h1> */}
    </div>
  )
}

export default HeaderCrumb
