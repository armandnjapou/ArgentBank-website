import Account from "../components/Account";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ProfilePage = () => {

    const accounts = [
        {
            title: 'Argent Bank Checking (x8349)',
            amount: 2082.79,
            balanceType: 'AVAILABLE'
        },
        {
            title: 'Argent Bank Saving (x6712)',
            amount: 10928.42,
            balanceType: 'AVAILABLE'
        },
        {
            title: 'Argent Bank Credit Card (x8349)',
            amount: 184.30,
            balanceType: 'CURRENT'
        }
    ];

    return (
        <>
            <NavBar />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                {
                    accounts.map((account) => 
                        <Account
                            key={account.title}
                            title={account.title}
                            amount={account.amount}
                            balanceType={account.balanceType}
                        />
                    )
                }
            </main>
            <Footer />
        </>
    );
}

export default ProfilePage;