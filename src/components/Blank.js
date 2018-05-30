import React from 'react'

import { observer } from 'mobx-react'

@observer
export default class Blank extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div>
        	<h1>Blank Component</h1>
        </div>
    }

    componentDidMount() {

    }
}

/* Initialize stylesheet. */
const styles = {

}
