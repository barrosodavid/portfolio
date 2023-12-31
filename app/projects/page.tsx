import dynamic from "next/dynamic";

const LeagueWrappedCard = dynamic(
  () => import("@/components/cards/leaguewrappedcard"),
  { ssr: false }
);

const MusicPortfolioCard = dynamic(
  () => import("@/components/cards/musicportfoliocard"),
  { ssr: false }
);

const MarioPyScriptCard = dynamic(
  () => import("@/components/cards/mariopyscriptcard"),
  { ssr: false }
);

const ComingSoonCard = dynamic(
  () => import("@/components/cards/comingsooncard"),
  { ssr: false }
);

export default function ProjectsPage() {
  return (
    <>
      <LeagueWrappedCard />
      <MusicPortfolioCard />
      <MarioPyScriptCard />
      <ComingSoonCard />
    </>
  );
}
