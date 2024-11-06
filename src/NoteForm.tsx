import { Col, Form, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <>
      <Form>
        <Stack gap={3}>
          <Row>
            <Col>
              <Form.Group controlId={"title"}>
                <Form.Label>Title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={"tags"}>
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect isMulti />
              </Form.Group>
            </Col>
          </Row>
        </Stack>
      </Form>
    </>
  );
}

export default NoteForm;