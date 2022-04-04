import Container from "../../atoms/Container";
import Column from "../../atoms/Column";
import FirstRow from "./groups/FirstRow";
import SecondRow from "./groups/SecondRow";
import * as spacingModule from '../../../styles/spacing.module.scss';

const { default: spacing } = spacingModule;

const DefaultDashboard = () => {
  return (
    <Container maxWidth={spacing.maxWidthForDesktop + 'px'}>
      <Column>
        <FirstRow />
        <SecondRow />
      </Column>
    </Container>
  );
};

export default DefaultDashboard;