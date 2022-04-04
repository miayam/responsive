import Container from "../../atoms/Container";
import * as spacingModule from '../../../styles/spacing.module.scss';

const { default: spacing } = spacingModule;

// The only purpose of this template is to test the layout.
const Misc = () => {
  // Could be anything down here.
  return (
    <Container maxWidth={spacing.maxWidthForDesktop + 'px'}>
      <h1>Hello. This is unused template!</h1>
    </Container>
  );
};

export default Misc;