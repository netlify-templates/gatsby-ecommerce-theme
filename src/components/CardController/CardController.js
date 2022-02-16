import React, {useState} from 'react';

import Container from '../Container';
import Checkbox from '../Checkbox';
import * as styles from './CardController.module.css';
import Button from '../Button';

const CardController = (props) => {

  const {filters, visible, closeFilter} = props;
  const [filterState, setFilterState] = useState(filters);

  const filterTick = (e, categoryIndex, labelIndex) => {
    const filterStateCopy = [...filterState];
    filterStateCopy[categoryIndex].items[labelIndex].value = !e.target.value;
    setFilterState(filterStateCopy);
  }

  return (
    <div className={`${styles.root} ${visible === true ? styles.show : styles.hide}`}>
      <Container>
        <div className={styles.filterContainer}>
          {filterState && filterState.map((filter, categoryIndex) => {
            // if number of filter per category is less than 4 maintain single layout
            const colNum = filter.items.length >= 4 ? 2 : 1;
            return(
              <div className={styles.categoryContainer} key={`category-${categoryIndex}`}>
                <span className={styles.category}>{filter.category}</span>
                <div className={styles.nameContainers} style={{gridTemplateColumns: `repeat(${colNum}, 1fr)`}}>
                  {filter.items && filter.items.map((item, itemIndex) => 
                    <Checkbox
                      key={itemIndex}
                      action={(e) => filterTick(e,categoryIndex,itemIndex)} 
                      label={item.name} 
                      value={item.value}
                      id={item.name}
                      name={item.name}
                    />
                  )}
                </div>
              </div>
            )
          })}
      </div>
      </Container>
      <div className={styles.actionContainer}>
        <Button onClick={closeFilter} className={styles.customButtonStyling} level={'primary'}>view items</Button>
        <Button onClick={closeFilter} className={styles.customButtonStyling} level={'secondary'}>close</Button>
      </div>
    </div>
  );
};

export default CardController;
