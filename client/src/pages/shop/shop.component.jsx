import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
const ShopPage = proppies => {
  console.log("proppies yaaaa b", proppies);
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${proppies.match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${proppies.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
