import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
//import

export default class name_class extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            //stateitem
        };
        // bind handleSubmit method
        this.handleSubmit = this.handleSubmit.bind(this);
        // bind handle Form
        //binditem
    }


    //componentDidMount
    componentDidMount() {
        //componentdidmount
    }


    //get options
    getOptions(){
        let uri = '//optionsurl'
        axios.get(uri).then((response) => {
            this.setState({
        //stateoptionsitems
            })
        });
    }

    // create handleSubmit
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        const data = {
            //dataitem
        }
        let uri = '//url';
        axios.post(uri, data).then((response) => {

        });

    }

    //handleitem

    render() {
        return (
            <div>
                <h5>Create //name</h5>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        //item
                        <Button variant="outline-success" block type="submit">Submit</Button>
                    </Row>
                </form>
            </div>
        );
    }
}
if (document.getElementById('@nameid')) {
    ReactDOM.render(< name_class />, document.getElementById('@nameid'));
}