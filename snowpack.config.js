module.exports = {
	installOptions: {
		rollup: {
			plugins: [ require('rollup-plugin-node-polyfills')() ]
		}
	}
};
