import FreeForeverSVG from 'assets/sections/benefits/free_forever.svg';
import ExclusiveAccessSVG from 'assets/sections/benefits/exclusive_access.svg';
import VIPTreatmentSVG from 'assets/sections/benefits/vip_treatment.svg';
import SupriseSVG from 'assets/sections/benefits/suprise.svg';

import styles from './BenefitsSection.module.scss';

const BenefitsSection = () => {
	return (
		<section className={styles.BenefitsSection}>
			<h2 className={styles.SectionHeading}>
				Join at beta phase and get exclusive
				<span className={styles.SectionHeadingHighlight}> benefits</span>
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
