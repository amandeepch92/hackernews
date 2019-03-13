import React from "react";
import {NavLink} from "react-router-dom";

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            alldata : "",
            isLoaded: false,
            pageIndex:1,
            showingPageNumber:0
        }
    }

    componentDidMount(){
        let that = this;
        fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
            .then((res) => res.json())
            .then((res) => {
                that.setState({
                    alldata:res,
                    isLoaded:true
                })
            })

    }

    pagination(){
        let that = this;
        let currentPageNumber = that.state.pageIndex+1;
        //let pageItemIndex = that.checkCardNumbers(currentPageNumber)
        fetch("http://hn.algolia.com/api/v1/search?page="+currentPageNumber)
            .then((res) => res.json())
            .then((res) => {
                if(res) {
                    that.setState({
                        alldata: res,
                        isLoaded: true,
                        pageIndex: currentPageNumber,
                        showingPageNumber: res.page
                    })
                }
            })
    }

    checkCardNumbers(index){
            let num = index-1;
            return num*10;
    }

    hideStory(e){
        window.$(e.target).closest("#id_news").hide()
    }

    render(){
        let itemindex = this.state.showingPageNumber === 0 ? this.state.showingPageNumber:this.state.showingPageNumber+10;
        return(
            this.state.isLoaded ?
                    <React.Fragment>
                        <div className="main-body">
                                {this.state.alldata.hits.map((item, index) => {
                                    return (<div key={"news_list_" + index} id={"id_news"}>
                                        <div>
                                            <span className="text">
                                                <span>
                                                    {itemindex +index+ 1}.
                                                </span>
                                                <a href={item.url}>{item.title}</a>
                                            </span>
                                        </div>
                                        <p>{item.points} points
                                            by {item.author} {parseInt(item.created_at_i / 86400000)} hour
                                            ago | <span onClick={this.hideStory.bind(this)}>hide</span>| <NavLink to={"/"+item.objectID}>{item.num_comments ? item.num_comments:0} comments</NavLink></p>
                                    </div>)
                                })
                                }

                                <div className="more" onClick={this.pagination.bind(this)}>More</div>

                        </div>
                    </React.Fragment>
                :

                            <div/>

        )
    }

}