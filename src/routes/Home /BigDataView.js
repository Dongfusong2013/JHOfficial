import React from 'react';
import './less/bigData.less'
import TweenOne from 'rc-tween-one';

import Scroll from '../Scroll'
export default class BigDataView extends React.Component{
   render(){
     return <div className="data-container">
       <Scroll/>
     </div>
   }
}
