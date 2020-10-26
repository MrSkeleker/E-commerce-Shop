import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../../redux/shop/shopSelectors';
import withSpinner from '../../../hocs/withSpinner';
import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);

export default CollectionPageContainer;