import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import sofiaImage from './images/location_sofia.jpg';
import plovdivImage from './images/location_plovdiv.jpg';
import varnaImage from './images/location_varna.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Sofia',
          sofiaImage,
          '?address=Sofia%2C%20Bulgaria&bounds=42.896425%2C23.678672%2C42.412497%2C23.051092&origin=42.7%2C23.33333'
        )}
        {locationLink(
          'Plovdiv',
          plovdivImage,
          '?address=Plovdiv%2C Plovdiv Province%2C Bulgaria&bounds=42.200069%2C24.843531%2C42.089342%2C24.652632&origin=42.14333%2C24.74889'
        )}
        {locationLink(
          'Varna',
          varnaImage,
          '?address=Varna%2C Bulgaria&bounds=43.600267%2C28.146745%2C42.815993%2C27.065744&origin=43.20778%2C27.91694'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
