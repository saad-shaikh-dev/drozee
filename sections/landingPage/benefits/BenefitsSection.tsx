import FreeForeverSVG from 'assets/sections/benefits/free_forever.svg';
import ExclusiveAccessSVG from 'assets/sections/benefits/exclusive_access.svg';
import VIPTreatmentSVG from 'assets/sections/benefits/vip_treatment.svg';
import SupriseSVG from 'assets/sections/benefits/suprise.svg';

import styles from './BenefitsSection.module.scss';

const BenefitsSection = () => {
	return (
		<section className={styles.BenefitsSection}>
			<h2 className={styles.SectionHeading}>
				Join at alpha phase and get exclusive
				<div className={styles.SectionHeadingHighlightContainer}>
					<h2 className={styles.SectionHeadingHighlight}>benefits</h2>
					<svg
						width='158'
						height='82'
						viewBox='0 0 158 82'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='15.6226'
							y1='29.5984'
							x2='110.951'
							y2='15.3772'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='30'
							strokeLinecap='round'
						/>
						<line
							x1='15'
							y1='-15'
							x2='88.1345'
							y2='-15'
							transform='matrix(0.86615 -0.499784 0.635993 0.771695 43 69.5449)'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='30'
							strokeLinecap='round'
						/>
						<line
							x1='45.6025'
							y1='49.241'
							x2='140.241'
							y2='29.3975'
							stroke='#292953'
							strokeOpacity='0.71'
							strokeWidth='30'
							strokeLinecap='round'
						/>
					</svg>
				</div>
			</h2>
			<div className={styles.BenefitsContainer}>
				<div className={styles.BenefitsWrapper}>
					<div className={styles.Benefits}>
						<FreeForeverSVG />
						<p className={styles.BenefitsPara}>Free Forever</p>
					</div>
					<div className={styles.Benefits}>
						<ExclusiveAccessSVG />
						<p className={styles.BenefitsPara}>Exclusive Access</p>
					</div>
				</div>
				<div className={styles.BenefitsWrapper}>
					<div className={styles.Benefits}>
						<VIPTreatmentSVG />
						<p className={styles.BenefitsPara}>VIP Treatment</p>
					</div>
					<div className={styles.Benefits}>
						<SupriseSVG />
						<p className={styles.BenefitsPara}>{"That's Suprise"}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
