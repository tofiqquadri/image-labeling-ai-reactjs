export const Box = ({ children, geometry, style }) => (
    <div
        style={{
            ...style,
            position: 'absolute',
            left: `${geometry.x}%`,
            top: `${geometry.y}%`,
            height: `${geometry.height}%`,
            width: `${geometry.width}%`
        }}>
        {children}
    </div>
);

export const CustomSelector = ({ annotation }) => {
    const { geometry } = annotation;
    if (!geometry) return null;

    return (
        <Box
            geometry={geometry}
            style={{
                background: 'rgba(255, 255, 255, 0.5)',
                border: 'solid 1px red'
            }}></Box>
    );
};

export const CustomContent = ({ annotation, onDelete }) => {
    const { geometry } = annotation;
    return (
        <button
            key={annotation.data.id}
            style={{
                left: `${geometry.x}%`,
                top: `${geometry.y + geometry.height}%`
            }}
            className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded absolute"
            onClick={() => onDelete(annotation)}>
            DELETE
        </button>
    );
};

export const CustomEditor = ({ annotation, onSubmit }) => {
    return (
        <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded mt-2"
            style={{
                position: 'absolute',
                left: annotation.geometry.x + '%',
                top: annotation.geometry.y + annotation.geometry.height + '%'
            }}
            onClick={() => onSubmit(annotation)}>
            SUBMIT
        </button>
    );
};
