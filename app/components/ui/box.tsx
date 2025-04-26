export const Box = ({ children, className, ...props }: any) => {
    return (
        <div
            className={`${className}`}
            {...props}
        >
            {children}
        </div>
    );
}