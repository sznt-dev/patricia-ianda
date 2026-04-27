import { upcomingEvents } from "@/data/midiaData";

const MidiaUpcoming = () => {
    return (
        <section className="pt-midia-section" aria-labelledby="upcoming-title">
            <div className="container">
                <div className="pt-midia-section__head tp_fade_anim">
                    <span className="pt-overline">Próximas participações</span>
                    <h2 id="upcoming-title">
                        Onde vou <em>estar</em>.
                    </h2>
                    <p>
                        Agenda confirmada de painéis, palestras e participações públicas.
                    </p>
                </div>

                <ul className="pt-events">
                    {upcomingEvents.map((e) => (
                        <li key={e.date + e.name} className="pt-event tp_fade_anim">
                            <span className="pt-event__date">{e.date}</span>
                            <div>
                                <h3 className="pt-event__name">{e.name}</h3>
                                <p className="pt-event__sub">{e.organization}</p>
                            </div>
                            <span className="pt-event__place">{e.place}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MidiaUpcoming;
