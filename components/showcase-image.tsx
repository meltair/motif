"use client";

import {Carousel, Icon} from "@motif-ui/react";

const slides = [
    {
        id: 1,
        label: "Success Negative",
        type: "negative",
        description: "Negative success indicates a successful state with a negative impact or consequence, such as an action that leads to an undesirable outcome.",
    },
    {
        id: 2,
        label: "Success Inverse",
        type: "inverse",
        description: "Inverse success offers contrast for success states when the default color isn’t suitable or emphasis needs to change.",
    },
    {
        id: 3,
        label: "Success Disabled",
        type: "disabled",
        description:
            "Disabled success treatment keeps semantic meaning visible while reducing emphasis to match non-interactive system states.",
    },
    {
		id: 4,
		label: "Success Default",
        type: "default",
		description:
			"Base success surfaces define the primary positive state across alerts, badges, messages, and confirmation patterns.",
	},
	{
		id: 5,
		label: "Success Hover",
        type: "hover",
		description:
			"Hover state strengthens affordance while preserving the semantic calm expected from a successful interaction pattern.",
	},
	{
		id: 6,
		label: "Success Active",
        type: "active",
		description:
			"Active state gives stronger visual commitment for pressed or selected success-driven components without breaking consistency.",
	},
];

export default function ShowcaseCarousel() {
	return (
        <div className="mt-20 p-4">
            <Carousel className="rounded-lg">
                {slides.map((slide, index) => (
                    <Carousel.Item title={slide.label} subtitle={slide.description} key={slide.id}>
                        <div className="min-h-[396px]" style={{
                            backgroundColor: `var(--theme-color-surface-success-${slide.type})`,
                        }}>
                            <Icon name="check" className="!text-8xl mt-22" color="var(--theme-color-semantic-base-black)" />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
	);
}