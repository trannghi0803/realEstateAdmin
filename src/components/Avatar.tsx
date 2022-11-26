import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    PureComponent,
} from "react";

import Helpers from "../commons/utils/Helpers";
import { Constants, Resources } from "../constants";

import "./ComponentStyles.css";



interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src?: any;
    onChangeValue: (value: any) => void;
    file?: any;
}

interface IStateProps {
    src: string;
}

export default class Avatar extends PureComponent<IProps, IStateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            src: Resources.Images.DEFAULT_AVATAR_URL,
        };
    }

    public render() {
        if (!Helpers.isNullOrEmpty(this.props.src)
            && (document.getElementById("fileInput") as any).value === "") {
            this.setState({ src: this.props.src });
        }

        return (
            // <Form.Group>
            //     <Form.Row style={{ alignItems: "center" }}>
                    <img src={this.state.src}
                        id="avatarImg"
                        width="7.5rem"
                        height="7.5rem"
                        className="avatar-120" />
            //         <div>
            //             <Form.Label className="ml-4 file-input-label" htmlFor="fileInput">
            //                 {this.props.children}
            //             </Form.Label>
            //             <input type="file" id="fileInput" accept="image/*" onChange={this.onChangeImage.bind(this)} />
            //         </div>
            //     </Form.Row>
            // </Form.Group>

        );
    }

    private onChangeImage = (event: any) => {
        const onChangeValue: (event: any) => void = this.props.onChangeValue;
        if (event.target.files && event.target.files[0] && event.target.files[0].size <= Constants.MAX_AVATAR_FILE_SIZE) {
            this.resize(event.target.files[0], 512, 512, onChangeValue);
        }
        else {
            onChangeValue({
                file: event.target.files[0],
                avatarUri: "",
            });
        }
    }

    private resize = (file: Blob, maxWidth: number, maxHeight: number, onChangeValue: (event: any) => void) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          try {
            const dataUrl = event.target.result;
            const image = new Image();
            image.onload = () => {
                const resizedDataUrl = this.resizeImage(image, maxWidth, maxHeight);
                this.setState({
                    src: resizedDataUrl,
                });
                onChangeValue({
                    file: file,
                    avatarUri: resizedDataUrl,
                });
            };
            image.src = dataUrl;
          } catch (error) {
              throw error;
          }
        };
        reader.readAsDataURL(file);
    }

    private resizeImage = (image: any, maxWidth: number, maxHeight: number) => {
        try {
            const canvas = document.createElement("canvas");
            const width = image.width > maxWidth ? maxWidth : image.width;
            const height = image.height > maxHeight ? maxHeight : image.height;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (ctx){
                const xOffset = image.width > maxWidth ? (image.width - maxWidth) / 2 : 0;
                const yOffset = image.height > maxHeight ? (image.height - maxHeight) / 2 : 0;
                ctx.drawImage(image, xOffset, yOffset, width, height, 0, 0, width, height);
            }
            return canvas.toDataURL("image/png");
        }
        catch (error) {
            throw error;
        }
    }
}
