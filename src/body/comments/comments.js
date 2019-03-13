import React from "react";
import Comment from "./comment";
import Header from "../../header/header";


export default class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            isLoaded:false
        }
    }
    componentDidMount() {

        fetch("http://hn.algolia.com/api/v1/items/19356029")
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res,
                    isLoaded:true
                })
            })
    }

    comment(item){
        if(item.children.length){
            console.log(item.children[0])
            this.comment(item.children[0])
           return <Comment data={item}>
                {this.props.children}
            </Comment>

        }else{
            return <Comment data={item}/>
        }
    }

    render(){
        const $data = this.state.data;
        return(
            this.state.isLoaded?
                    <React.Fragment>
                        <Header/>
                        <div className={"header"}>
                            <a href={$data.url}>{$data.title}</a>
                            <p>{$data.points} points
                                by {$data.author} {parseInt($data.created_at_i / 86400000)} hour
                                ago | <a href={"#"}>hide</a>| past | web | favourite | {$data.children.length ? $data.children.length:0} comments
                            </p>
                            <form>
                                <textarea rows={"10"} cols={"50"}></textarea>
                                <input type={"button"} value={"Add Comment"}/>
                            </form>
                        </div>

                        <div className={"body"}>
                            {$data.children.map((item)=>{
                                return this.comment(item);
                            })}
                            <a></a>

                        </div>

                    </React.Fragment>
            :
                <div/>
        )
    }

}