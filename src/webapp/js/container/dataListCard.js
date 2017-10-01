import React from 'react'
import Card from '../component/card'
import { connect } from 'react-redux'

const DataListCard = ({cards}) => {
    return (
        <div>
            {cards.map(item => <Card key={item.id} {...item}></Card>)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    cards: state.cards
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     handlerClick: () => dispatch(setLabel('Hello!!'))
// });

export default connect(mapStateToProps)(DataListCard);
