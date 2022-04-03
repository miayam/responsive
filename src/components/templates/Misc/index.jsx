import Column from "../../atoms/Column";
import Container from "../../atoms/Container";
import Row from "../../atoms/Row";
import * as spacingModule from "../../../styles/spacing.module.scss";

const { default: spacing } = spacingModule;

// The only purpose of this template is to test the layout
const Misc = () => {
  // It could be anything.
  return (
    <Container maxWidth={spacing.maxWidthForDesktop}>
      <Column>
        <Row>
          <Column>
            <h1>Title</h1>
            <p>Hello</p>
          </Column>
          <Column>
            <h1>Title 2</h1>
            <p>Hello 2</p>
          </Column>
        </Row>
        <Row>
          Hello Bro!
        </Row>
      </Column>
    </Container>
  );
};

export default Misc;