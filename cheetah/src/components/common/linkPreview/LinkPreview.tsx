import React from 'react';
import { Icon } from '../icon/Icon';
import styles from './LinkPreview.module.scss';

const LinkPreview: React.FC<{
  title?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
}> = ({ title, description, imageUrl, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={styles['link']}
  >
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

const memoized = React.memo(LinkPreview);

export { memoized as LinkPreview };

LinkPreview.displayName = 'LinkPreview';
