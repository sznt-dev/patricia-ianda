import { timelineEntries } from "@/data/timelineData";

const HistoryTimeline = () => {
    return (
        <section className="pt-timeline" aria-labelledby="timeline-title">
            <div className="container">
                <div className="pt-timeline__head">
                    <span className="pt-overline tp_fade_anim">Linha do tempo</span>
                    <h2 id="timeline-title" className="pt-timeline__title tp_fade_anim" data-delay=".15">
                        Vinte anos em <em>cada cargo</em>, uma entrega concreta.
                    </h2>
                    <p className="pt-timeline__lead tp_fade_anim" data-delay=".3">
                        Cada gestão avançou onde a anterior deixou. A trajetória é longa
                        porque o problema também é.
                    </p>
                </div>

                <ol className="pt-timeline__track">
                    {timelineEntries.map((entry, i) => (
                        <li
                            key={entry.role + i}
                            className="pt-timeline__entry tp_fade_anim"
                            data-delay={`.${(i % 4) * 10 + 15}`}
                        >
                            <div className="pt-timeline__period">
                                <span>{entry.period}</span>
                                {entry.place && <span className="place">{entry.place}</span>}
                            </div>
                            <h3 className="pt-timeline__role">{entry.role}</h3>
                            <p className="pt-timeline__delivery">{entry.delivery}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default HistoryTimeline;
