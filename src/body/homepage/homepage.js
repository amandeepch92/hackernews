import React from "react";

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

        let pageItemIndex = that.checkCardNumbers(that.state.pageIndex+1)
        fetch("http://hn.algolia.com/api/v1/search?page="+that.state.pageIndex+1)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if(res) {
                    that.setState({
                        alldata: res,
                        isLoaded: true,
                        pageIndex: that.state.pageIndex + 1,
                        showingPageNumber: res.page
                    })
                }
            })
    }

    checkCardNumbers(index){
            let num = index-1;
            return num*10;
    }

    render(){
        let itemindex = this.state.showingPageNumber==0?this.state.showingPageNumber:this.state.showingPageNumber+10;
        return(
            this.state.isLoaded ?
                    <React.Fragment>
                        <div>
                                {this.state.alldata.hits.map((item, index) => {
                                    return (<div key={"news_list_" + index}>
                                        <div>
                                            {itemindex +index+ 1} .
                                            <span>
                                    <a href={item.url}>{item.title}</a>
                                </span>
                                        </div>
                                        <p>{item.points} points
                                            by {item.author} {parseInt(item.created_at_i / 86400000)} hour
                                            ago | <a>hide</a>| {item.num_comments ? item.num_comments:0} comments</p>
                                    </div>)
                                })
                                }

                                <div onClick={this.pagination.bind(this)}>More</div>

                        </div>
                    </React.Fragment>
                :

                            <div/>

        )
    }

}