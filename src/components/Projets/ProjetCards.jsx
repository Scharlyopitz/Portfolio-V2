import ProjetCard from "./ProjetCard";

export default function ProjetCards({ LesProjets, base, responsive }) {
  return (
    <>
      {LesProjets.map((projet, idx) => {
        return (
          <ProjetCard
            key={idx}
            projet={projet}
            idx={idx}
            base={base}
            responsive={responsive}
          />
        );
      })}
    </>
  );
}
