import { EntityId } from '@reduxjs/toolkit';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface ContentNavigationProps {
  items: EntityId[];
  navClassName: string;
  itemClassName: string;
  activeItemClassName: string;
  withCaption?: boolean;
  currentSlug: EntityId;
}

const ContentNavigation: FC<ContentNavigationProps> = ({
  items,
  navClassName,
  itemClassName,
  activeItemClassName,
  currentSlug,
  withCaption = false,
}) => {
  const location = useLocation();
  const parent = location.pathname.split('/')[1] || '.';

  const content = items.map((slug) => {
    const pathTo = typeof slug === 'string' ? slug : slug.toString();
    const linkClassName = `${itemClassName} ${currentSlug === slug ? activeItemClassName : ''}`;

    return (
      <li className="flex cursor-pointer" key={slug}>
        <NavLink to={`/${parent}/${pathTo}`} className={linkClassName}>
          {withCaption && pathTo.toUpperCase()}
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
