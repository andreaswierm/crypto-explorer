import { FC, useMemo } from "react";
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@material-ui/core";

type TitleLevels = 1 | 2 | 3 | 4 | 5 | 6;
type TitleProps = {
  level: TitleLevels;
}

const mapLevelToVariant: Record<TitleLevels, MuiTypographyProps["variant"]> = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
  "5": "h5",
  "6": "h6",
}

export const Title: FC<TitleProps> = ({
  children,
  level,
}) => {
  const variant: MuiTypographyProps["variant"] = useMemo(() => {
    return mapLevelToVariant[level];
  }, [level]);

  return (
    <MuiTypography variant={variant}>
      {children}
    </MuiTypography>
  )
}
