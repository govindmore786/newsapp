import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  constructor(){
    super();
    this.state={articles:[],
      loading : false,
      page : 1
    };
  }
  static defaultProps ={
    category:'general'
  }
 
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?q=apple&from=2024-10-04&to=2024-10-04&sortBy=popularity&category=${this.props.category}&apiKey=a021dd4dfa0a453db9f8c7f1d80b307d&pageSize=10`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    
  }
  PrevClick=async()=>{let url = `https://newsapi.org/v2/top-headlines?q=apple&from=2024-10-04&to=2024-10-04&sortBy=popularity&category=${this.props.category}&apiKey=a021dd4dfa0a453db9f8c7f1d80b307d&page=${this.state.page-1}&pageSize=10`
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles: parsedData.articles})
  this.setState({page:this.state.page-1,
    articles:parsedData.articles
  })
    
  }
  NextClick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?q=apple&from=2024-10-04&to=2024-10-04&sortBy=popularity&category=${this.props.category}&apiKey=a021dd4dfa0a453db9f8c7f1d80b307d&page=${this.state.page+1}&pageSize=10`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    this.setState({page:this.state.page+1,
      articles:parsedData.articles
    })
  }
  render() {
    return (
      <div className='container my-3'>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
          return < div className='col-md-3' key={element.publishedAt}>
           <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
           </div>
        })}
         
        </div>
        <div className='container d-flex justify-content-between'>
        <button className="btn btn-primary " type="button" onClick={this.PrevClick} disabled={this.state.page<=1}>Prev</button>
        <button className="btn btn-primary" type="button" onClick={this.NextClick}disabled={this.state.page>2}>Next</button>
       
        </div>
      </div>
     
    )
  }
}

export default news
