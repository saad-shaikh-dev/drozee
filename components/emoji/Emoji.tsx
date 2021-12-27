import styles from './Emoji.module.scss';
interface EmojiProps {
	symbol: string;
	label?: string;
}

const Emoji = ({ symbol, label }: EmojiProps) => (
	<span
		className={styles.Emoji}
		role='img'
		aria-label={label ? label : ''}
		aria-hidden={label ? 'false' : 'true'}
	>
		{symbol}
	</span>
);

export default Emoji;
