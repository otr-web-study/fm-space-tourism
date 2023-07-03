import { EntityId } from '@reduxjs/toolkit';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface ContentNavigationProps {
  items: EntityId[];
  navClassName: string;
  itemClassName: string;
  activeItemClassName: string;
  caption?: CaptionType;
  currentSlug: EntityId;
  captionClassName?: string;
}

type CaptionType = 'slug' | 'index';

const ContentNavigation: FC<ContentNavigationProps> = ({
  items,
  navClassName,
  itemClassName,
  activeItemClassName,
  currentSlug,
  caption,
  captionClassName = '',
}) => {
  const location = useLocation();
  const parent = location.pathname.split('/')[1] || '.';

  const content = items.map((slug, idx) => {
    const pathTo = typeof slug === 'string' ? slug : slug.toString();
    const linkClassName = `transition-all duration-200 ${itemClassName} ${
      currentSlug === slug ? activeItemClassName : ''
    }`;

    return (
      <li className="flex cursor-pointer" key={slug}>
        <NavLink to={`/${parent}/${pathTo}`} className={linkClassName}>
          {caption && (
            <span className={captionClassName}>
              {caption === 'slug' ? pathTo.toUpperCase() : idx + 1}
            </span>
          )}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className={navClassName}>{content}</ul>
    </nav>
  );
};

export default ContentNavigation;
