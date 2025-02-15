import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://photos5.appleinsider.com/gallery/61270-126518-000-lede-Apple-Park-xl.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
