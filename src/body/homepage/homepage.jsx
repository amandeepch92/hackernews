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
                that.updateData(res)

            })

    }

    updateData(data){
        let that = this;
        let upvoteSessionData = that.getData();
        let news = data.hits;
        if(upvoteSessionData !== null){
            for(let i=0;i<news.length;i++){
                news[i]["upvoteCount"] = upvoteSessionData[news[i]["objectID"]] === null ? 0 : upvoteSessionData[news[i]["objectID"]];
            }
        }
        that.setState({
            alldata:news,
            isLoaded:true
        });
        

    }

    getData(){
        let upvoteSessionData = sessionStorage.getItem("upvote");
        if(upvoteSessionData !== null){
            upvoteSessionData = JSON.parse(upvoteSessionData);
        }
        return upvoteSessionData;
    }

    storeData(id){
        //let upvoteDataArray = [];
        let checkSessionData = sessionStorage.getItem("upvote");
        if(checkSessionData ==null){
            let upvoteDataArray=[];
            let upvotedata = {
                "objectID": id,
                "upvoteCount": 1
            };
            upvoteDataArray.push(upvotedata);
            upvotedata = JSON.stringify(upvoteDataArray);
            sessionStorage.setItem("upvote",upvotedata);
            return;

        }
        else {
            let upvoteDataArray = [...JSON.parse(checkSessionData)];
            let upvotedata = {
                "objectID": id,
                "upvoteCount": 1
            };
            for(let item =0 ;item < upvoteDataArray.length ; item++){
                if (upvoteDataArray[item]["objectID"] == id) {
                    upvoteDataArray[item]["upvoteCount"] = Number(upvoteDataArray[item]["upvoteCount"]) + 1;
                    return;
                }
            }
            upvoteDataArray.push(upvotedata);
            upvotedata = JSON.stringify(upvoteDataArray);
            sessionStorage.setItem("upvote",upvotedata);
        }
    }

    pagination(){
        let that = this;
        let currentPageNumber = that.state.pageIndex+1;
        //let pageItemIndex = that.checkCardNumbers(currentPageNumber)
        fetch("http://hn.algolia.com/api/v1/search?page="+currentPageNumber)
            .then((res) => res.json())
            .then((res) => {
                if(res) {
                    that.updateData(res)
                }
            })
    }

    upvote(id,e){
        //console.log(id)
        this.storeData(id);
        let previousValue  = window.$(e.target.previousSibling).text()
        window.$(e.target.previousSibling).text(Number(previousValue) + 1)
    }

    hideStory(e){
        window.$(e.target).closest("#id_news").hide()
    }

    render(){
        let itemindex = this.state.showingPageNumber === 0 ? this.state.showingPageNumber : this.state.showingPageNumber+10;
        return(
            this.state.isLoaded ?
                    <React.Fragment>
                        <div className="main-body">
                                {this.state.alldata.map((item, index) => {
                                    return (<div key={"news_list_" + index} id={"id_news"}>
                                        <div>
                                            <span className="text">
                                                <span>
                                                    {itemindex +index+ 1}.
                                                </span>
                                                <span className="hand" id="id_upvote">{item["upvoteCount"]}</span>
                                                <span className="hand" onClick={this.upvote.bind(this,item.objectID)}>upvote</span>
                                                <a href={item.url}>{item.title}</a>
                                            </span>
                                        </div>
                                        <p>{item.points} points
                                            by {item.author} {parseInt(item.created_at_i / 86400000)} hour
                                            ago | <span className="hand" onClick={this.hideStory.bind(this)}>hide</span>| <NavLink to={"/"+item.objectID}>{item.num_comments ? item.num_comments:0} comments</NavLink></p>
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