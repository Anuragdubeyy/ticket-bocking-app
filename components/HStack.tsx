import { Stack, StackProps } from "./Stack"

interface HStackProps extends StackProps{
    flex?: number
    direction?: "row" | "column"
    gap?: number
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch"
}

export function HStack(props: HStackProps ){
    return(
        <Stack {...props} direction="row"/>
    )
}