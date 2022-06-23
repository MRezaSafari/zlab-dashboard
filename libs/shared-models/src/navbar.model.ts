
enum AnchorTagTarget {
    BLANK = '_blank',
    SELF = '_self',
    PARENT = '_parent',
    TOP = '_top'
}

interface INavbar {
    id: number,
    title: string,
    href: string,
    target: AnchorTagTarget,
}

export { AnchorTagTarget, INavbar };
