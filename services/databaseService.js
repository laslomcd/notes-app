import { database } from "./appwrite";

const databaseService = {
	// List Documents
	async listDocuments(dbId, colId) {
		try {
			const response = await database.listDocuments(dbId, colId);
			return response.documents || [];
		} catch (error) {
			console.error("Error Fetching Documents:", error.message);
			return { error: error.message };
		}
	},
	// Create Documents
	async createDocument(dbId, colId, data, id = null) {
		try {
			return await database.createDocument(dbId, colId, id || undefined, data);
		} catch (error) {
			console.error("Error Creating Document", error.message);
			return {
				error: error.message,
			};
		}
	},
};

export default databaseService;
