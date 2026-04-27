"use client";
import { useState } from "react";
import { talks, type Talk } from "@/data/workData";

const filters: ("Tudo" | Talk["theme"])[] = [
    "Tudo",
    "Assistência Social",
    "Empreendedorismo",
    "Violência",
    "Gestão",
];

const WorkTalks = () => {
    const [active, setActive] = useState<(typeof filters)[number]>("Tudo");

    const filtered = active === "Tudo" ? talks : talks.filter((t) => t.theme === active);

    return (
        <section className="pt-work-section pt-work-section--alt" aria-labelledby="talks-title">
            <div className="container">
                <div className="pt-work-section__head tp_fade_anim">
                    <span className="pt-overline">Palestras e participações</span>
                    <h2 id="talks-title">
                        Onde a <em>conversa</em> acontece.
                    </h2>
                    <p>
                        Mesas, painéis e aulas em todo o Brasil — sempre com pauta clara
                        e posicionamento concreto sobre os temas que importam.
                    </p>
                </div>

                <div className="pt-talks-filters">
                    {filters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            className={`pt-talks-filter ${active === f ? "pt-talks-filter--active" : ""}`}
                            onClick={() => setActive(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <ul className="pt-talks-list">
                    {filtered.map((talk) => (
                        <li key={talk.date + talk.title} className="pt-talk">
                            <span className="pt-talk__date">{talk.date}</span>
                            <div>
                                <h3 className="pt-talk__title">{talk.title}</h3>
                                <p className="pt-talk__sub">{talk.organization}</p>
                            </div>
                            <span className="pt-talk__city">{talk.city}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WorkTalks;
