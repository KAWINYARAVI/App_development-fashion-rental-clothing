import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaBars, FaSearch } from 'react-icons/fa';

const AdminDashboard = () => {
  const [view, setView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    billing: { total: 1200, transactions: 30 },
    orders: [
      { id: 1, status: 'Shipped' },
      { id: 2, status: 'Processing' },
      { id: 3, status: 'Delivered' },
    ],
    totalRents: 45,
    rentedClothes: [
      { id: 101, name: 'Red Dress', status: 'Rented' },
      { id: 102, name: 'Blue Sherwani', status: 'Returned' },
    ],
  };

  const handleLogin = () => {
    if (id === 'Kawin' && password === 'Kawin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid ID or password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>RUR</h1>
        </div>
        <h2 style={styles.loginTitle}>Admin Login</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button onClick={handleLogin} style={styles.loginButton}>Login</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navLogoContainer}>
          <h1 style={styles.navLogo}>RUR</h1>
        </div>
        <FaBars style={styles.navIcon} />
        <div style={styles.searchContainer}>
          <FaSearch style={styles.searchIcon} />
          <input type="text" placeholder="Search now" style={styles.searchInput} />
        </div>
        <FaBell style={styles.navIcon} />
      </nav>
      <div style={styles.mainContent}>
        <div style={styles.sidebar}>
          <ul style={styles.sidebarList}>
            <li style={styles.sidebarItem} onClick={() => setView('dashboard')}><button style={styles.sidebarButton}>Dashboard</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('billing')}><button style={styles.sidebarButton}>Billing</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('orderTracking')}><button style={styles.sidebarButton}>Order Tracking</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('totalRents')}><button style={styles.sidebarButton}>Total Rents</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('rentedClothes')}><button style={styles.sidebarButton}>Rented Clothes</button></li>
          </ul>
          <div style={styles.footer}>
            <Link to="/" style={styles.backButton}>Go back</Link>
          </div>
        </div>
        <div style={styles.content}>
          {view === 'dashboard' && <Dashboard />}
          {view === 'billing' && <Billing data={data.billing} />}
          {view === 'orderTracking' && <OrderTracking data={data.orders} />}
          {view === 'totalRents' && <TotalRents data={data.totalRents} />}
          {view === 'rentedClothes' && <RentedClothes data={data.rentedClothes} />}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div style={styles.contentBox}>
    <h2>Dashboard</h2>
    <p>Welcome to the Admin Dashboard.</p>
  </div>
);

const Billing = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Billing Information</h2>
    <p>Total Billing: ${data.total}</p>
    <p>Transactions: {data.transactions}</p>
  </div>
);

const OrderTracking = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Order Tracking</h2>
    <ul>
      {data.map(order => (
        <li key={order.id}>Order ID: {order.id}, Status: {order.status}</li>
      ))}
    </ul>
  </div>
);

const TotalRents = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Total Rents</h2>
    <p>Total Rents: {data}</p>
  </div>
);

const RentedClothes = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Rented Clothes</h2>
    <ul>
      {data.map(item => (
        <li key={item.id}>ID: {item.id}, Name: {item.name}, Status: {item.status}</li>
      ))}
    </ul>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #dee2e6',
  },
  navLogoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  navLogo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    marginRight: '20px',
  },
  navIcon: {
    fontSize: '20px',
    color: '#6c757d',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '5px 10px',
    borderRadius: '20px',
  },
  searchIcon: {
    marginRight: '5px',
    color: '#6c757d',
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    marginTop: '10px',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 60px)', // Adjusted to account for navbar height
    position: 'fixed',
    top: '60px', // Adjusted to account for navbar height
    left: 0,
    justifyContent: 'space-between',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '10px',
  },
  sidebarButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  content: {
    marginLeft: '220px',
    marginTop: '60px', // Adjusted to account for navbar height
    padding: '20px',
    width: 'calc(100% - 240px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid #dee2e6',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: '20px',
  },
  backButton: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    backgroundColor: '#6c757d',
    padding: '10px 20px',
    borderRadius: '4px',
    textAlign: 'center',
    display: 'block',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
  },
  loginTitle: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '300px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  loginButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AdminDashboard;
