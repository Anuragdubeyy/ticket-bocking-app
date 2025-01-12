import { defaultShortcut, Shortcut } from "@/styles/shortcuts";
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

export interface StackProps extends PropsWithChildren, Shortcut, ViewProps {
    flex?: number;
    direction?: "row" | "column";
    gap?: number;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
}
export function Stack({
    flex,
    direction,
    gap,
    justifyContent,
    alignItems,
    children,
    style,
    ...restProps

}: StackProps){
    return(
        <View style={[defaultShortcut(restProps), {
            flex,
            flexDirection: direction,
            gap,
            justifyContent,
            alignItems
        }, style    ]} {...restProps}>
            {children}

        </View>
    )

}