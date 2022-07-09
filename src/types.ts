interface KeyboardButtonSvgTextType {
    y?: number;
    x?: number;
    value?: string;
    textAnchor?: string;
}

export interface KeyboardButtonSvgType {
    x?: number;
    y?: number;
    path: {
        d: string;
    };
    text?: KeyboardButtonSvgTextType;
    text1?: KeyboardButtonSvgTextType;
}