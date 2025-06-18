import styles from './App.module.sass';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Job Listing</h1>
      </header>
      <main className={styles.appMain}>
        <p>Welcome to Job Listing App</p>
      </main>
    </div>
  );
}

export default App;
