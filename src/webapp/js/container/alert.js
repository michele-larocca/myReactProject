import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { hideErrorNotification } from '../action/notification'
import { connect } from 'react-redux'

const defaultHeader = 'ATTENZIONE';

const Alert = ({title = defaultHeader, text, onConfirm, open = false}) => (
    <Modal  open={open} onClose={onConfirm} closeOnDimmerClick={false} >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{text}</Modal.Content>
        <Modal.Actions>
            <Button positive icon='checkmark' labelPosition='right' content='Ok' onClick={onConfirm} />
        </Modal.Actions>
    </Modal>);

const mapStateToProps = (state, ownProps) => ({
    title: state.notification.title,
    open: state.notification.open,
    text: state.notification.text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onConfirm: () => dispatch(hideErrorNotification())
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);