import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'experience',
		items: [
			{
				title: 'Spare Parts Administrator',
				place: 'PT. Srikandi Diamond Motors Bandung',
				timePeriod: 'August 2024 - Now',
				description: (
					<ul>
						<li>
							Managing spare parts inventory.
						</li>
						<li>
							Including tracking stock levels.
						</li>
						<li>
							Ordering new parts.
						</li>
						<li>
							Ensuring timely delivery to customers.
						</li>
					</ul>
				),
			},
		],
	},
	{
		items: [
			{
				title: 'Programmer',
				place: 'PT. Habibi Digital Nusantara',
				timePeriod: 'Dec 2022 - May 2023',
				description: (
					<ul>
						<li>
							Converting the website of PT. Habibi Digital Nusantara (Habibi Garden) from HTML to ReactJS.
						</li>
					</ul>
				),
			},
		],
	},
	{
		items: [
			{
				title: 'Staff Programmer',
				place: 'Bandung Techno Park - Telkom University',
				timePeriod: 'Oct 2021 - Dec 2021',
				description: (
					<ul>
						<li>
							Designing applications that already exist or don't exist yet and making a manual book for web-based applications.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'SQL and Relational Databases 101',
				place: 'Cognitive Class',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Earned a SQL and Relational Databases 101 certification from Cognitive Class.
						</li>
						<li>
							Given for successfully completing and obtaining a passing grade.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Computer',
				place: 'Indonesian University of Infromatics and Business',
				timePeriod: '2018 -2024',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section className='about-me container' id='about-me'>
			<div>
				<SectionTitle title='About' subTitle='ME' />
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						Hallo, I'm Fajar Nur Rahman, a UI/UX Designer, Web Developer and Spare Parts Administrator.
					</p>
					<p>
						My 9 months of experience as a programmer has equipped me with <strong>skills</strong> in creating web-based applications{' '} 
						and a high attention to detail
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div className='timeline' key={idx}>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description}, idx) => (
								<div className='timeline-list' key={idx}>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place}
											<br />
											{timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}