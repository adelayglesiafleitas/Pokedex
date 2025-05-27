

interface HelloProps {
    name: string;
}

export const Hello = ({ name }: HelloProps) => {
    return (
        <h1>Hello, {name}</h1>
    )
}
