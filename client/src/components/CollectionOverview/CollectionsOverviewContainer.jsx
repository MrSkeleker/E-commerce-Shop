import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shopSelectors';
import withSpinner from '../../hocs/withSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;