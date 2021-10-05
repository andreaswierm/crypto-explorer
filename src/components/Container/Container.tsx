import { Container as MuiContainer, ContainerProps as MuiContainerProps } from "@material-ui/core";
import { FC } from "react";

type ContainerProps = Pick<MuiContainerProps, "maxWidth">;

export const Container: FC<ContainerProps> = (props) => <MuiContainer {...props} />;
