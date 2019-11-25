export interface IGetResponsiveColumnClipPaths {
    columns: number;
    offset: number;
}

interface IGetClipPath {
    index: number;
    containerWidth: number;
    containerHeight: number;
    columnWidth: number;
    offset: number;
    columns: number;
}

try {
    VamtigerBrowserMethod.method.getResponsiveColumnClipPaths = getResponsiveColumnClipPaths
} catch(error) {
    console.warn(error);
}

export default function getResponsiveColumnClipPaths({columns, offset}: IGetResponsiveColumnClipPaths) {
    const containerWidth = 100;
    const containerHeight = containerWidth;
    const columnWidth = containerWidth/columns;
    const clipPaths = new Array(columns)
        .fill(undefined)
        .map((entry, index) => getClipPath({index, containerWidth, containerHeight, columnWidth, columns, offset}));

    return clipPaths;
}

function getClipPath({index, containerWidth, containerHeight, columnWidth, columns, offset}: IGetClipPath) {
    const firstColumn = !index;
    const lastColumn = index === columns - 1;
    const clipPath = {
        topLeftX: firstColumn ? index
            : (columnWidth * index) + offset,
        topLeftY: 0,
        topRightX: firstColumn ? columnWidth + offset
            : lastColumn && containerWidth || (columnWidth * (index + 1)) + offset,
        topRightY: 0,
        bottomRightX: firstColumn ? columnWidth - offset
            : lastColumn && containerWidth || (columnWidth * (index + 1)) - offset,
        bottomRightY: containerHeight,
        bottomLeftX: firstColumn ? 0
            :  (columnWidth * index) - offset,
        bottomLeftY: containerHeight
    };

    return clipPath;
}
