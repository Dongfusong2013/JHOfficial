import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';
import ResolutionView from './ResolutionView'
import {Route} from 'react-router-dom'

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';
import './less/antMotion_style.less';
import BigDataView from "./BigDataView";
import SystemView from "./SystemView";
import AboutUsView from "./AboutUsView";
import Scroll from '../Scroll';
import BestCases from './BestCases'
import linkUrls from '../LinkConfig.js'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class HomePage extends React.Component{
  constructor(){
    super();
    this.state = {isMobile:false, show:true};
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (true) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }
// <Content0 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile}/>,
  render(){
    const children = [
      <Content0 id="content_1_0" key="content_1_0" isMobile={this.state.isMobile}/>,
      <Content1 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile}/>,
      <Content2 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>,
      <ResolutionView/>,
      <Content3 id="content_4_0" key="content_4_0" isMobile={this.state.isMobile}/>,
    ];

    return <div>
      {this.state.show && children}
    </div>
  }
}


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: true,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (true) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }
  showRoutes(){
    let components = [BigDataView,ResolutionView,BestCases,AboutUsView];
    let array = [];
    for (let i = 0; i < components.length; i++){
        array.push(<Route path={linkUrls[i]} component={components[i]}/>);
    }
    return array;
  }

  render() {
    return (
      <div className="templates-wrapper">
        <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>
        <Route exact path="/" component={HomePage} />
        {this.showRoutes()}
        <Footer id="footer_0_0" key="footer_0_0" isMobile={this.state.isMobile}/>
      </div>
    );
  }
}
