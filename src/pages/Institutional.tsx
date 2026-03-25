import Header from '../components/Header';
import Footer from '../components/Footer';
import InstitutionalHero from '../components/institutional/InstitutionalHero';
import History from '../components/institutional/History';
import MissionVisionValues from '../components/institutional/MissionVisionValues';
import InstitutionalRole from '../components/institutional/InstitutionalRole';
import BoardOfDirectors from '../components/institutional/BoardOfDirectors';
import OrganizationalStructure from '../components/institutional/OrganizationalStructure';
import AssociatedEntities from '../components/institutional/AssociatedEntities';

interface InstitutionalProps {
  onNavigate?: (page: string) => void;
}

export default function Institutional({ onNavigate }: InstitutionalProps) {
  return (
    <>
      <InstitutionalHero />
      <History />
      <MissionVisionValues />
      <InstitutionalRole />
      <BoardOfDirectors />
      <OrganizationalStructure />
      <AssociatedEntities />
    </>
  );
}
