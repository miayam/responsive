import Container from "../../atoms/Container";
import FirstRow from "./groups/FirstRow";
import SecondRow from "./groups/SecondRow";
import StackedBlocks from "../../molecules/StackedBlocks";
import * as spacingModule from '../../../styles/spacing.module.scss';

const { default: spacing } = spacingModule;

const DefaultDashboard = () => {
  return (
    <Container maxWidth={spacing.maxWidthForDesktop + 'px'}>
      <StackedBlocks
        renderProps={() => [
          <FirstRow key="first-row" />,
          <SecondRow key="second-row" />
        ]}
      />
    </Container>
  );
};

export default DefaultDashboard;