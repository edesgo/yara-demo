import { Typography } from "@mui/material";

interface TitleProps {
  type:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";

  align: "inherit" | "left" | "center" | "right" | "justify";
  text: string;
}

export default function Title(props: TitleProps) {
  const { type, align, text } = props;
  return (
    <Typography variant={type} component="h1" align={align}>
      {text}
    </Typography>
  );
}
