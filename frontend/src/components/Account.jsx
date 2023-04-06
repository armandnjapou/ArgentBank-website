import PropTypes from 'prop-types';

const Account = ({title, amount, balanceType}) => {

    const balanceTypes = {
        'AVAILABLE': 'Available Balance',
        'CURRENT': 'Current Balance'
    }

    console.log(title + ' ' + amount + ' ' + balanceType);

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
            <p className="account-amount-description">{balanceTypes[balanceType]}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}

Account.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.number,
    balanceType: PropTypes.string
}

Account.defaultProps = {
    balanceType: 'AVAILABLE'
}

export default Account;