import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
	root: {
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		// background by SVGBackgrounds.com
		backgroundColor: "#A10FE4",
		backgroundImage: `url(${bg})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		overflow: "scroll",
	},
	heading: {
		fontSize: "2rem",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("xs")]: {
			width: "70%",
		},
		[sizes.down("xl")]: {
			width: "80%",
		},
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "1.5rem",
		[sizes.down("sm")]: {
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
			gridGap: "1rem",
		},
	},
};

export default styles;
