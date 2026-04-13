import {ListView} from "@motif-ui/react";

export function ListViewSurface() {

	return (
		<div className="w-full max-w-[520px]">
            <ListView>
                <ListView.Item
                    title="Contact List"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fermentum arcu, vitae dignissim quam. Suspendisse eu nisi semper, congue augue tincidunt, porttitor dui. Nam at faucibus turpis, sed ullamcorper augue. Proin odio tortor, tincidunt et malesuada sed, dictum ultrices metus."
                    alternateText="Wallet"
                    icon="person"
                    id="1"
                />
                <ListView.Item title="My Documents" description="Personal notes and stuff" alternateText="Year 2008" icon="assignment" id="2" />
                <ListView.Item title="Appointments" description="Items added to the calendar" alternateText="Active" icon="calendar_month" id="3" />
            </ListView>
		</div>
	);
}


