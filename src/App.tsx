import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";
import Header from "./Components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NoteList from "./Components/NotesList";
import CreateNotes from "./Components/CreateNote";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Schedule meeting with UI/UX Team, and Study from home.",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
