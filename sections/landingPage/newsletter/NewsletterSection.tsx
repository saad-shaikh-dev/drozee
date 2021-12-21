import Button from 'components/button/Button';
import styles from './NewsletterSection.module.scss';

const NewsletterSection = () => {
	return (
		<section className={styles.NewsletterSection}>
			<h2 className={styles.SectionHeading}>
				Subscribe to your newsletter & get latest updates!
			</h2>
			<form className={styles.NewsletterForm}>
				<input
					type='email'
					placeholder='Enter your email'
					className={styles.EmailInput}
				/>
				<Button type='submit' aria-label='Subscribe'>
					Subscribe
				</Button>
			</form>
		</section>
	);
};

export default NewsletterSection;
