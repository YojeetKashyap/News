import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    //country:'us',
    pageSize:4,
    category:"business",
  }

  static propTypes = {
    //country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      //Page: 1
    }
  }

  async updatenews()  {
    const url = `https://news-img.vercel.app/?category=${this.props.category}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading:false
    })
  }
  
  async componentDidMount() {
    let url = `https://news-img.vercel.app/?category=${this.props.category}`;
    this.setState({loading:true})
  
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log("data")
    console.log(parsedData.articles);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading:false})
   

  }

  // comment

  handlePreviousClick = async () => {

    /*let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&categroy=${this.props.category}&apiKey=459be332ac4849e69a366330d1253bda&page=${this.state.Page - 1}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      Page: this.state.Page - 1,
      articles: parsedData.articles,
      loading:false
    })*/
   //this.setState({Page : this.state.Page -1});
   this.updatenews();

  }

  handleNextClick = async () => {
    //console.log("next")
    if (!(this.state.Page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)))
    {
      /*let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&categroy=${this.props.category}&apiKey=459be332ac4849e69a366330d1253bda&page=${this.state.Page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        Page: this.state.Page + 1,
        articles: parsedData.articles,
        loading:false
      })*/
     //this.setState({Page : this.state.Page + 1});
     this.updatenews();
    }
  


  }

  render() {
    return (
      <div className='container'>
        <h2 style={{color:"white"}}>Top Headlines </h2> 
        <h2 style={{color:"#494848"}}>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} </h2>
        {this.state.loading && <Spinner/>}
        <div className='row' >
          {!this.state.loading &&  this.state.articles.map((elements) => {
            return <div className='col-md-3' key={elements.url}>
              <NewsItem title={elements.title ? elements.title.slice(0,50) : ""} newsUrl={elements.link.slice(0)}  imageUrl={elements.img}  author={elements.author} />
              {console.log(elements.img)}
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default News
