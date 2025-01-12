import { DimensionValue } from "react-native";

export interface Shortcut {
    m?: number | "auto";
    ml?: number | "auto";
    mr?: number | "auto";
    mt?: number | "auto";
    mb?: number | "auto";
    mx?: number | "auto";
    my?: number | "auto";

    p?: number | "auto";
    pl?: number | "auto";
    pr?: number | "auto";
    pt?: number | "auto";
    pb?: number | "auto";
    px?: number | "auto";
    py?: number | "auto";

    w?: DimensionValue;
    h?: DimensionValue;
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    bg?: string;
    rounded?: number;
    shadow?: number;

}

export const defaultShortcut = (props: Shortcut) => ({
    padding: props.p,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    paddingHorizontal: props.px,
    paddingVertical: props.py,
    marginLeft: props.ml,
    marginRight: props.mr,
    marginTop: props.mt,
    marginBottom: props.mb,
    marginHorizontal: props.mx,
    marginVertical: props.my,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    backgroundColor: props.bg,
    borderRadius: props.rounded,
    shadowOpacity: props.shadow,
    shadowRadius: props.shadow,

})
