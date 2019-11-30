import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import './directory.styles.scss';
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => {
  
  console.log('sections', sections)
 
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => {
          console.log('other other', otherSectionProps)
          return (
          <MenuItem key={id} {...otherSectionProps} />
        )})}
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);