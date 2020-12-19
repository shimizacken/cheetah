import React from 'react';
import classNames from 'classnames';
import {LinkPreview} from '../../../../components/common/linkPreview/LinkPreview';
import type {LinkPreview as LinkPreviewType} from '../../../../packages/socket/savannah.types';
import styles from './ChatMessage.module.scss';

export const MessageContentContainer: React.FC<{
  text: string;
  edited: boolean;
  linkPreview?: LinkPreviewType;
  isCurrentUser: boolean;
  darkTheme: boolean;
}> = ({text, edited, linkPreview, isCurrentUser, darkTheme}) => {
  return (
    <div
      className={classNames(
        styles['content'],
        isCurrentUser && styles['current-user-message'],
        darkTheme && styles['dark']
      )}
    >
      <div>{text}</div>
      {linkPreview && (
        <LinkPreview
          title={linkPreview.title}
          description={linkPreview.description}
          imageUrl={linkPreview.image}
          link={linkPreview.link}
        />
      )}
      {edited && (
        <div className={styles['edited']}>
          <i>(edited)</i>
        </div>
      )}
    </div>
  );
};

// const linkPreviewPropTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   link: PropTypes.string
// };

// MessageContentContainer.propTypes = {
//   text: PropTypes.string,
//   linkPreview: PropTypes.shape(linkPreviewPropTypes),
//   isCurrentUser: PropTypes.bool,
//   edited: PropTypes.bool,
//   darkTheme: PropTypes.bool
// };

// MessageContentContainer.defaultProps = {
//   text: undefined,
//   linkPreview: undefined,
//   isCurrentUser: false,
//   edited: false,
//   darkTheme: false
// };
