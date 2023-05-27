import React from 'react';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <div className={cls.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={'/'}
                        className={cls.mainLink}
                    >
                        Main Page
                    </AppLink>
                    <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                        About
                    </AppLink>
                </div>
            </div>
        </div>
    );
};
