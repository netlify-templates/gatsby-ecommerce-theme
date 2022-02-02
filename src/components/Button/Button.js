import React from "react"
import { Link } from "gatsby"

// import { scroller } from 'react-scroll';

import * as styles from './Button.module.css'

const Button = ({ children, href, target, level, type, size, disabled, onClick, name, value, className, flat, link ,fullWidth, theme }) => {
    const classes = [styles.button];

    if (level in styles) {
        classes.push(styles[level])
    }
    if (size in styles) {
        classes.push(styles[size])
    }
    if (theme in styles) {
        classes.push(styles[theme])
    }

    if (disabled) {
        classes.push(styles.disabled)
    }
    if (flat) {
        classes.push(styles.flat)
    }
    if (link) {
        classes.push(styles.link)
    }
    if (fullWidth) {
        classes.push(styles.fullWidth)
    }
    if (className) {
        classes.push(className)
    }
    
    const classOutput = classes.join(' ');

    // const scrollToHash = (evt) => {
    //     if (evt.currentTarget.getAttribute('href') && evt.currentTarget.getAttribute('href').indexOf('/#') > -1) {
    //         evt.preventDefault();
    //         const id = evt.currentTarget.getAttribute('href').split('/#')[1];
    //         scroller.scrollTo(
    //             id,
    //             {
    //                 duration: 800,
    //                 delay: 0,
    //                 offset: -180,
    //                 smooth: 'easeInOutQuart'
    //             }
    //         );
    //     }
    // }
    return (
        <>
          <button className={classOutput} type={type === 'buttonSubmit' ? "submit" : ""}>{children}</button>
            {/* {(type === 'inputButton' || type === 'inputSubmit') && (
                <input className={classOutput} type={type === 'inputSubmit' ? "submit" : "button"} name={name} value={value} {...(onClick ? {onClick} : {onClick: scrollToHash})} />
            )}
            {(type === 'button' || type === 'buttonSubmit') && (
                <button className={classOutput} type={type === 'buttonSubmit' ? "submit" : ""} {...(onClick ? {onClick} : {onClick: scrollToHash})}>{children}</button>
            )}
            {(type === 'span') && (
                <span data-button className={classOutput} role="presentation" {...(onClick ? {onClick} : {onClick: scrollToHash})}>{children}</span>
            )}
            {(!type || type === 'a') && target && (
                <a href={href} className={classOutput} {...(onClick ? {onClick} : {onClick: scrollToHash})} disabled={disabled} target="_blank" rel="noreferrer">{children}</a>
            )}
            {(!type || type === 'a') && !target && (
                <Link to={href} className={classOutput} {...(onClick ? {onClick} : {onClick: scrollToHash})} disabled={disabled}>{children}</Link>
            )} */}
        </>
    )
}

export default Button