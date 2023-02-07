import Palette from "./Palette";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";

function App() {
	const findPalette = (id) => {
		return seedColors.find(function (palette) {
			return palette.id === id;
		});
	};
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={(routeProps) => (
					<PaletteList palettes={seedColors} {...routeProps} />
				)}
			/>
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => (
					<Palette
						palette={generatePalette(findPalette(routeProps.match.params.id))}
					/>
				)}
			/>
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={() => <SingleColorPalette />}
			/>
		</Switch>

		// <div>
		// 	<Palette palette={generatePalette(seedColors[4])} />
		// </div>
	);
}

export default App;
