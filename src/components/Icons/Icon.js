import React from 'react'

// Alphabetical order please
import Arrow from './Arrow';
import Bag from './Bag';
import BagPlus from './BagPlus';
import Caret from './Caret';
import Check from './Check';
import CreditCard from './CreditCard';
import Cross from './Cross';
import Cycle from './Cycle';
import Delivery from './Delivery';
import Facebook from './Facebook';
import Filter from './Filter';
import Heart from './Heart';
import Instagram from './Instagram';
import List from './List';
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
    case 'bagPlus':
        return <BagPlus />;
    case 'caret':
        return <Caret />;
    case 'check':
        return <Check />;
    case 'creditcard':
        return <CreditCard />;
    case 'cross':
        return <Cross />;
    case 'cycle':
        return <Cycle />;
    case 'delivery':
        return <Delivery />;
    case 'facebook':
        return <Facebook />;
    case 'filter':
        return <Filter />;
    case 'heart':
        return <Heart />
    case 'instagram':
        return <Instagram />
    case 'list':
        return <List />;
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
