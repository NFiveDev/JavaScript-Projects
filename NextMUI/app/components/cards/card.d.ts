import { BoxOwnProps } from "@mui/system";

export type featureProps = {
    title: string;
    icon: JSX.Element;
    description: string;
    link: { label?: string; href: string };
};

export type iconCardProps = {
    title?: string;
    icon: JSX.Element;
    text?: string;
    href?: string;
    wrapperSxStyle?: BoxOwnProps
}