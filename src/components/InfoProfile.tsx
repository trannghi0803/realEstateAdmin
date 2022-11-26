import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import "../commons/styles/Styles.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { IInfoProfile } from "../commons/utils/Interface";
import Row from "./Row";
import Col from "./Col";
import Strings from "../constants/Strings";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "100%"
        },
        textChange:{
            color: 'var(--default-text-color-green)',
            textDecorationLine: `underline`,
            fontSize: `var(--default-12px)`,
            lineHeight: `var(--default-20px)`,
            cursor: `pointer`,
        },
        row:{
            padding: `var(--default-16px) 0rem`,
            borderTop: '1px solid #F5F5F5',
            zIndex: 1
        },
        textValue:{
            fontWeight: 'bold',
            color: '#19232E',
        }
    }),
);

interface IProps extends GridProps {
    info?: IInfoProfile[];
}

export default function InfoProfile(props: IProps) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            {props.info?.map((data, index)=>{
                return(
                    <Row className={classes.row} key={data.name}>
                        <Col xs={5}>
                            {data.name}
                        </Col>
                        <Col xs={data.change ? 5 : 7} className={`${data.change ?  '' : 'justify-content-end'} ${classes.textValue}`}>
                            {data.value}
                        </Col>
                        <Col xs={2} className={data.change ? classes.textChange : "d-none"}>
                            {data.change ? Strings.Common.CHANGE : ""}
                        </Col>
                    </Row>
                )
            })}
        </Grid>
    );
}