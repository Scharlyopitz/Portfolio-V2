import ProjetCard from "./ProjetCard";

export default function ProjetCards({ LesProjets, base }) {
    return (
        <>
            {LesProjets.map((projet, idx) => {
                return (
                    <ProjetCard
                        key={idx}
                        projet={projet}
                        idx={idx}
                        base={base}
                    />
                );
            })}
        </>
    );
}
