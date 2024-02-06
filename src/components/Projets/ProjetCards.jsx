import ProjetCard from "./ProjetCard";

export default function ProjetCards({ LesProjets, responsive }) {
  return (
    <>
      {LesProjets.map((projet, idx) => {
        return (
          <ProjetCard
            key={idx}
            projet={projet}
            idx={idx}
            responsive={responsive}
          />
        );
      })}
    </>
  );
}
