import React from 'react';
import { Router, Route, Switch,Link} from 'dva/router';
import {Icon} from 'antd'
import BestBanner from "./BestBanner";
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;


class CaseItem extends React.Component{
  render(){
    return <div className="case_item">
      <div className="image">
        < img src={this.props.src} alt={this.props.name}/>
      </div>
      <div className="info">
        {this.props.name}
      </div>
      <div className="count">
        <div className="line"></div>
        <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'center'}}>
          <div style={{marginLeft:10,display:'flex'}}>
            <div>
              <Icon type="eye-o" />
            </div>
            <div style={{marginLeft:10}}>{this.props.count}</div>
          </div>
        </div>

      </div>
    </div>
  }
}


class CaseItemView extends React.Component{
  constructor(){
    super();
    this.array = [{src:"http://a.300.cn/case/20171221/5a3b4b9d95a18.png", name:"鞍山鞍钢集团",count:1059},
      {src:"http://a.300.cn/case/20171221/5a3b598a0a351.png", name:"大连樽御股份有限公司",count:4059},
      {src:"http://a.300.cn/case/20171221/5a3b500d4090c.png", name:"上海神农股份",count:8765},
      {src:"http://a.300.cn/case/20171221/5a3b597f89d80.png", name:"江苏横琴农产品集团",count:5051}]
  }

  showItems(){
    let array = [];
    for (let i = 0; i < this.array.length; i++){
      let item = this.array[i];
      array.push(<CaseItem src={item.src} name={item.name} count={item.count} key={i}/>)
    }
    return array;
  }

  render(){
    return <div>
      <QueueAnim delay={800} type="bottom" className="caseItemsView">
        {this.showItems()}
      </QueueAnim>
    </div>
  }
}


export default class BestCases extends React.Component{
  render(){
    return <div>
      <BestBanner/>
      <ScrollOverPack>
        <CaseItemView/>
        <CaseItemView/>
      </ScrollOverPack>
    </div>
  }
}
