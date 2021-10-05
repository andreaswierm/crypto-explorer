import { Paper as MuiPaper, PaperProps as MuiPaperProps } from "@material-ui/core";
import { FC } from "react";

type PaperProps = Pick<MuiPaperProps, "elevation">;

export const Paper: FC<PaperProps> = (props) => <MuiPaper {...props} />;
