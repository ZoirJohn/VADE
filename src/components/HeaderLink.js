import { Component } from 'react';

class Link extends Component {
   static defaultProps = {
      linkText: 'link',
   };
   render() {
      return (
         <li>
            <a href='#'>{this.props.linkText}</a>
         </li>
      );
   }
}
export default Link;
