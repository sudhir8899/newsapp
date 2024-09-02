import React from 'react'

const NewItems =(props)=> {
  //render() {
    let {title,description,imageUrl,newsUrl,author,date,source} =props;
    return (
      <div className='my-3'>
        <div className="card"  >
        <div style={{
          display:'flex',
          justifyContent:"flex-end",
          position:"absolute",
          right:'0'
        }}>
        <span className="rounded-pill bg-danger" >{source}</span>
        {/* <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style ={{left:'90%' ,zIndex:'1'}}>{source}</span> */}
        </div>
          <img src={!imageUrl?"https://images.hindustantimes.com/img/2024/07/27/1600x900/GTO5lFdWYAA9N6S_1722082780275_1722082841946.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title } </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary"> by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  //}
}

export default NewItems
