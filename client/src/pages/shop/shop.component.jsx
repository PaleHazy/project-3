import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import "./shop.styles.scss";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    console.log("BITCH THIS IS WHEN I LOADED");
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
    // fetch('https://firestore.googleapis.com/v1/projects/project-3-6eebe/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections))
  }

  render() {
    const { match, loadedCollections } = this.props;
    console.log("loadedCollections", !loadedCollections);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionsStart())
});
export default connect(null, mapDispatchToProps)(ShopPage);
