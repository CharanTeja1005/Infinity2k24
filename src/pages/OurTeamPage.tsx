import { FC } from 'react';
import MainTeamComponent from '../components/MainTeamComponent';
import team_info from '../data/team_info';
import TracingBeam from '../components/ui/TracingBeam';

interface OurTeamPageProps {}

const OurTeamPage: FC<OurTeamPageProps> = () => {
  return (
    <TracingBeam>
      <MainTeamComponent team_info={team_info}/>
    </TracingBeam>
  );
}

export default OurTeamPage;