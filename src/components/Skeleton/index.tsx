import { SkeletonCardContainer } from "./styles";

interface ISkeletonProps {
  type: "card"; // <- Implementar modo lista
}

export function Skeleton({ type }: ISkeletonProps) {
  return type === "card" ? (
    <SkeletonCardContainer>
      <div className="coffee-img" />
      <div className="coffee-tag"></div>
      <div className="coffee-description"></div>
      <div className="coffee-prices"></div>

    </SkeletonCardContainer>
  ) : (
    <></>
  );
}
