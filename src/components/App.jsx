import { Component } from 'react';
import Statistics from './Statistics';
import Button from './Button';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
		total: 0,
		feedback: 0,
	};

	incrementPositive = () => {
		this.setState((prevState) => {
			return { good: prevState.good + 1 };
		});
		this.setState((prevState) => {
			return { total: prevState.total + 1 };
		});
	};

	incrementNeutral = () => {
		this.setState((prevState) => {
			return { neutral: prevState.neutral + 1 };
		});
		this.setState((prevState) => {
			return { total: prevState.total + 1 };
		});
	};

	incrementNegative = () => {
		this.setState((prevState) => {
			return { bad: prevState.bad + 1 };
		});
		this.setState((prevState) => {
			return { total: prevState.total + 1 };
		});
	};

	render() {
		const { total } = this.state;
		return (
			<>
				{total > 0 ? (
					<Statistics stats={this.state} />
				) : (
					<Notification message='There is no feedback' />
				)}
				<Section title='Please add a feedback'>
					<Button label='Positive' handleChange={this.incrementPositive} />
					<Button label='Neutral' handleChange={this.incrementNeutral} />
					<Button label='Negative' handleChange={this.incrementNegative} />
				</Section>
			</>
		);
	}
}

export default App;
