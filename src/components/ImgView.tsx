import React, { useEffect } from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import "../commons/styles/Styles.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ImgsViewer from "react-images-viewer";
import { Resources } from "../constants";
const useStyles = makeStyles(() =>
    createStyles({
        ddddddddddddd: {
            flexGrow: 1,
            // width: "0rem"
            '& ..fade:not(.show)':{
                opacity: '1'
            }
        }
    }),
);

interface IProps extends GridProps {
    viewerIsOpen?: boolean
    onClose: (value: any) => void;
    imgList?: Array<any>
    curImg?: number
}

export default function ImgView(props: IProps) {
    const classes = useStyles();
    const [currImg, setCurrImg] = React.useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = React.useState<boolean>(true);
    useEffect(() => {
        setCurrImg(props.curImg || currImg)
    }, [props.curImg]);
    const gotoPrevious = () =>{
        setCurrImg(currImg => currImg - 1);
    }

    const gotoNext = () =>{
        setCurrImg(currImg => currImg + 1);
    }
    const closeViewer = () => {
        props.onClose(false)
    }
    const gotoImg = (index: number) => {
        setCurrImg(index)
    }

    return (
        <Grid >
            <ImgsViewer
                imgs={props.imgList}
                currImg={currImg}
                isOpen={props.viewerIsOpen}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                onClose={closeViewer}
                onClickThumbnail={gotoImg}
                showThumbnails
                backdropCloseable
            />
      </Grid>
    );
}