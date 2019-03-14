import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme,{EnzymeAdapter,shallow,mount,ShallowWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';
import Homepage from "./body/homepage/homepage";

Enzyme.configure({ adapter: new Adapter() })

describe("check home page component",() => {
  it("renders homepage with isLoaded false",() => {
    const  wrapper = shallow(<Homepage/>)
    expect(wrapper.find("div.main-body").length).toEqual(0);
  })


  it("check homepage  isLoaded value",() => {
    const  wrapper = shallow(<Homepage/>)
    let isLoaded = wrapper.state("isLoaded")
    expect(isLoaded).toEqual(false);
  })

  it("check homepage with isLoaded True",()=>{
    const  wrapper = shallow(<Homepage/>)
    let isLoaded = wrapper.setState({isLoaded:true,alldata:[]})
    expect(wrapper.find("div.main-body").length).toEqual(1);
  })


})