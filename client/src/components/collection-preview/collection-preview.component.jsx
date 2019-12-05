import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, ...otherProppies }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 3)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <CustomButton
        more
        onClick=
        {() => {
          console.log(otherProppies)
          return otherProppies.history.push(
            `${otherProppies.match.path}/${otherProppies.routeName}`
          );
        }}
        >{`MORE ${otherProppies.routeName.toUpperCase()}`}
      </CustomButton>
    </div>
  );
};

export default withRouter(CollectionPreview);
