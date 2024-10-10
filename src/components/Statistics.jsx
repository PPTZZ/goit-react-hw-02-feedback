import PropTypes from 'prop-types';
const Statistics = ({ stats }) => {
	const { good, neutral, bad, total} = stats;
	return (
		<>
			<h1>Statistics</h1>
			<h2>Posistive: {good}</h2>
			<h2>Neutral: {neutral}</h2>
			<h2>Negative: {bad}</h2>
			<h2>Total: {total}</h2>
			<h2>Posistive feedback: {Math.round((good/total)*100)}%</h2>
		</>
	);
};
Statistics.propTypes = {
	stats: PropTypes.object.isRequired,
};
export default Statistics;
