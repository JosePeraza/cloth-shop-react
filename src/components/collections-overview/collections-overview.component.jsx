import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectColectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionPros }) => (
      <CollectionPreview key={id} {...otherCollectionPros} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectColectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
