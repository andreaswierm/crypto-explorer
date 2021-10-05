import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@material-ui/core";
import { FC } from "react";

type TextFieldProps = Pick<MuiTextFieldProps, "onClick" | "label" | "variant">;

export const TextField: FC<TextFieldProps> = (props) => <MuiTextField variant="standard" {...props} />;
