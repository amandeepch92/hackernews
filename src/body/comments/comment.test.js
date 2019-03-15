import React from 'react';
import Enzyme,{shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Comments from "./comments";



describe("check home page component",() => {
    it("renders homepage with isLoaded false",() => {
        const  wrapper = shallow(<Comments match={{"params":{id:""}}}/>)
        expect(wrapper.find("div.header").length).toEqual(0);
    })


    it("check homepage  isLoaded value",() => {
        const  wrapper = shallow(<Comments match={{"params":{id:""}}}/>)
        let isLoaded = wrapper.state("isLoaded")
        expect(isLoaded).toEqual(false);
    })

    it("check homepage with isLoaded True",()=>{
        const  wrapper = shallow(<Comments match={{"params":{id:""}}}/>)
         wrapper.setState({isLoaded:true,data:{children:{},url:"google.com"}})
        expect(wrapper.find("div.header").length).toEqual(1);
    })


})