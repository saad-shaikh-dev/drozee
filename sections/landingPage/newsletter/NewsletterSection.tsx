import Button from 'components/button/Button';

const NewsletterSection = () => {
	return (
		<section>
			<h2>Subscribe to your newsletter & get latest updates!</h2>
			<form>
				<input type='email' placeholder='Enter your email' />
				<Button type='submit' aria-label='Subscribe'>
					Subscribe
				</Button>
			</form>
		</section>
	);
};

export default NewsletterSection;
