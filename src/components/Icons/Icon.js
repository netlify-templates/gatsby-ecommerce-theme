import React from 'react'

//a b c d e f
//g h i j k l
//m n o p r s
//t u v w x y
//z

// Alphabetical order please
import Arrow from './Arrow';
import Bag from './Bag';
import Caret from './Caret';
import Facebook from './Facebook';
import Heart from './Heart';
import Instagram from './Instagram';
import Search from './Search';
import Twitter from './Twitter';
import User from './User';
import Youtube from './Youtube';

function Icon(props) {
  switch (props.symbol) {
    case 'arrow':
        return <Arrow />;
    case 'bag':
        return <Bag />;
    case 'caret':
        return <Caret />;
    case 'facebook':
        return <Facebook />;
    case 'heart':
        return <Heart />
    case 'instagram':
        return <Instagram />
    case 'search':
      return <Search />
    case 'twitter':
        return <Twitter />;
    case 'user':
        return <User />;
    case 'youtube':
        return <Youtube />;
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
