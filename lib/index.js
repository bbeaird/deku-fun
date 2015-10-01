import element from 'dekujs/virtual-element';
import { TextField, Code, Button } from 'segmentio/ui';
import { Grid, Cell } from 'dominicbarnes/deku-grid';


/**
 * `bbeaird`.
 */

export default {
	initialState() {
		return { code: '' };
	},
  propTypes: {
    
  },

  render({ props, state }, updateState) {
  	let { code } = state;

  	return(
  		<Grid>
  			<Cell size="1of2">
  				<TextField onInput={updateCode} multiline/>
  			</Cell>
  			<Cell size="1of2">
  				<Code language='javascript'>{code}</Code>
  			</Cell>
  		</Grid>
  	);

  	function updateCode(e) {
  		updateState({ code: e.target.value });
  	}
  }
};
