import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Resources, Strings } from '../constants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        moreContanier: {
            marginTop: '1rem'
        },
        textMore: {
            fontsize: `1.33rem`,
            color: `var(--default-text-color-green)`,
            fontWeight: 400,
            cursor: 'pointer'
        },
        ml1r: {
            marginLeft: `1rem`
        },
        expand: {
            transition: 'all 0.4s'
        },
        faArrowDown: {
            transform: `rotate(0deg)`,
            transition: `transform 0.1s linear`,
            marginLeft: `1rem`,
            width: `1.67rem`,
            height: `1.67rem`
        },
          
        faArrowDownOpen: {
            transform: `rotate(-180deg)`,
            transition: `transform 0.1s linear`,
            marginLeft: `1rem`,
            width: `1.67rem`,
            height: `1.67rem`
        },
    }),
);

export default function ReadMore(props: any) {
    const [readMore, setReadMore] = useState(false);
    const classes = useStyles();
    return (
        <div>
            <div className={`${readMore ? 'expand' : 'narrow-down'} ${classes.expand}` } >
                {props.children}
            </div>
            <div className={classes.moreContanier} onClick={() => setReadMore(!readMore)}>
                <span className={classes.textMore}>{!readMore ? Strings.Components.READ_MORE : Strings.Components.COLLAPSE }</span>
                <img className={readMore ? classes.faArrowDown : classes.faArrowDownOpen} src={Resources.Icon.CHEVRON_UP} />
            </div>
            <div className="separator"></div>

        </div>
    );
}