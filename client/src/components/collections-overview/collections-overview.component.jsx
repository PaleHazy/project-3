import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateProps)(CollectionsOverview);
