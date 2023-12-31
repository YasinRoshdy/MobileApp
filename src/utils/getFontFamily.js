const fonts = {
    Quran: {
        fontWeights: {
            300: "Light",
            400: "Regular",
            700: "Bold",
            900: "Black",
            normal: "Regular",
            bold: "Bold"
        },
        fontStyles: {
            normal: "",
            italic: "Italic"
        }
    }
};

const getFontFamily = (baseFontFamily, styles = {}) => {
    const { fontWeight, fontStyle } = styles;
    const font = fonts[baseFontFamily];
    if (!font) {
        throw new Error(`Font '${baseFontFamily}' is not supported.`);
    }

    const weight = fontWeight
        ? font.fontWeights[fontWeight]
        : font.fontWeights.normal;

    if (typeof weight === "undefined") {
        throw new Error(`Font '${baseFontFamily}' is not configured for a font weight of '${fontWeight}'.`);
    }

    const style = fontStyle
        ? font.fontStyles[fontStyle]
        : font.fontStyles.normal;

    if (typeof style === "undefined") {
        throw new Error(`Font '${baseFontFamily}' is not configured for a font style of '${fontStyle}'.`);
    }

    if (style === font.fontStyles.italic && weight === font.fontWeights.normal) {
        return `${baseFontFamily}-${style}`;
    }

    return `${baseFontFamily}-${weight}${style}`;
};

export default getFontFamily;