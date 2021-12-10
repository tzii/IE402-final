import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC, ReactElement, useMemo } from 'react';

const Tabs: FC<TabsProps> = ({ tabs }) => {
	const router = useRouter();
	const selectedTab = useMemo(() => {
		return tabs.find((tab) => tab.id == router.query.tab) || tabs[0];
	}, [router.query.tab]);

	return (
		<div className="container mx-auto px-3 mt-4">
			<ul className="list-reset flex border-b">
				{tabs.map((tab) => (
					<li className="-mb-px mr-1" key={tab.id}>
						<button
							className={clsx('bg-white inline-block py-2 px-4 hover:text-purple-500 focus:outline-none', {
								'border-l border-t border-r rounded-t  font-semibold': selectedTab.id == tab.id,
							})}
							onClick={() => {
								router.replace({ query: { tab: tab.id } });
							}}
						>
							{tab.label}
						</button>
					</li>
				))}
			</ul>
			<div className="my-3">{selectedTab.content}</div>
		</div>
	);
};

export default Tabs;
// component props
type TabsProps = { tabs: { id: string; label: string; content: ReactElement }[] };
