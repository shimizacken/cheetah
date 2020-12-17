import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon/Icon';
import styles from './LinkPreview.module.scss';

export const LinkPreview = React.memo(({ title, description, imageUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles['link']}>
      <div className={styles['link-preview-wrapper']}>
        {imageUrl && (
          <div className={styles['image-wrapper']}>
            <Icon src={imageUrl} alt={title} className={styles['image']} />
          </div>
        )}
        <div>
          <div className={styles['title']}>{title}</div>
          <div className={styles['description']}>{description}</div>
        </div>
      </div>
    </a>
  );
});

LinkPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string
};

LinkPreview.defaultProps = {
  title: undefined,
  description: undefined,
  imageUrl: undefined,
  link: undefined
};
