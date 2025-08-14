import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddNoteModal from "../components/AddNoteModal";
import NoteList from "../components/NoteList";

const NoteScreen = () => {
	const [notes, setNotes] = useState([
		{ id: "1", text: "Note One" },
		{ id: "2", text: "Note Two" },
		{ id: "3", text: "Note Three" },
	]);
	const [modalVisable, setModalVisable] = useState(false);
	const [newNote, setNewNote] = useState("");

	// Add New Note
	const addNote = () => {
		if (newNote.trim() === "") return;
		setNotes((prevNotes) => [...prevNotes, { id: Date.now.toString(), text: newNote }]);
		setNewNote("");
		setModalVisable(false);
	};

	return (
		<View style={styles.container}>
			<NoteList notes={notes} />
			<TouchableOpacity style={styles.addButton} onPress={() => setModalVisable(true)}>
				<Text style={styles.addButtonText}>+ Add Note</Text>
			</TouchableOpacity>
			<AddNoteModal
				modalVisable={modalVisable}
				setModalVisable={setModalVisable}
				newNote={newNote}
				setNewNote={setNewNote}
				addNote={addNote}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	addButton: {
		position: "absolute",
		bottom: 20,
		left: 20,
		right: 20,
		backgroundColor: "#007bff",
		padding: 15,
		borderRadius: 8,
		alignItems: "center",
	},
	addButtonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default NoteScreen;
