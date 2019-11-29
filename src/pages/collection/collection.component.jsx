import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

//import CollectionItem from '../../components/collection-item/collection-item.component'
import "./collection.style.scss";
const CollectionPage = (proppies) => {
  console.log('proppies from collection.component', proppies);
  return (
    <div className='collection-page'>
      <h2>CATORY APAGE</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};
export default connect(mapStateToProps)(CollectionPage);
