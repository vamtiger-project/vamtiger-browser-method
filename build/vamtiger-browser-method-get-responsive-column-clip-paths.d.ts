export interface IGetResponsiveColumnClipPaths {
    columns: number;
    offset: number;
}
export default function getResponsiveColumnClipPaths({ columns, offset }: IGetResponsiveColumnClipPaths): {
    topLeftX: number;
    topLeftY: number;
    topRightX: number;
    topRightY: number;
    bottomRightX: number;
    bottomRightY: number;
    bottomLeftX: number;
    bottomLeftY: number;
}[];
