import styles from './PageFooter.module.css';
export default function PageFooter() {
  return (
    <div className={styles.pageFooter}>
      <p>This is Footer section</p>
      <p>Common for all pages of the application</p>
    </div>
  );
}