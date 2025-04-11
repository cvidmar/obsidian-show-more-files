import { Plugin } from "obsidian";

export default class ShowMoreFilesPlugin extends Plugin {
	async onload() {
		this.registerExtensions(
			["txt", "csv", "html"],
			"markdown"
		);
		this.registerExtensions(
			["docx", "xlsx"],
			"file"
		);
	}
}
