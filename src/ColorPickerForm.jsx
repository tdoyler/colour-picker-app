import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: "teal", newColorName: "" };

		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isColorName", (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}
	updateCurrentColor(newColor) {
		console.log(newColor.hex);
		this.setState({ currentColor: newColor.hex });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: "" });
	}
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
					<TextValidator
						placeholder="Color Name"
						value={newColorName}
						name="newColorName"
						variant="filled"
						margin="normal"
						onChange={this.handleChange}
						className={classes.colorNameInput}
						validators={["required", "isColorName", "isColorUnique"]}
						errorMessages={[
							"Enter a Color Name",
							"Color Name Already Being Used",
							"Color Already Used",
						]}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						disabled={paletteIsFull}
						className={classes.addColorBtn}
						style={{
							backgroundColor: paletteIsFull ? "grey" : currentColor,
						}}
					>
						{paletteIsFull ? "Palette Full" : "Add Color"}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
