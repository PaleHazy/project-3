import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from '../../components/collection-item/collection-item.component'
//import CollectionItem from '../../components/collection-item/collection-item.component'
import "./collection.styles.scss";
const CollectionPage = (proppies) => {
  console.log('proppies from collection.component', proppies);
  const {title, items} = proppies.collection
  return (
    <div className='collection-page'>
      <h2 className='title' >{title}</h2>
      <div className='items'>
          {
            items.map(item => {

                return <CollectionItem key={item.id} item={item}/>
            })  
          }
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};
export default connect(mapStateToProps)(CollectionPage);
