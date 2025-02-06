import React, { Component } from 'react'
import alterimg from '../alterimg.jpg'
export class NewsItem extends Component {
  render() {
    let {title,imageUrl,newsUrl,author} = this.props;
    
    return (
      <div className=' my-3' style={{zIndex:1}}>
        <div className="card " style={{width: "18rem",backgroundColor:"#212529"}}>
          <img src={imageUrl==="null"?alterimg:imageUrl} className="card-img-top" alt={alterimg} style={{height:"150px"}}/>
            <div className="card-body">
              <h5 className="card-title" style={{color:"white"}}>{title}...</h5>
              {/*<p className="card-text">{description}...</p>*/}
              {console.log(imageUrl)}
              <h6 style={{color:"grey"}}>By : {author==="null"?"not mentioned":author}</h6>
              <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-outline-light "  >Read more</a>
              
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
