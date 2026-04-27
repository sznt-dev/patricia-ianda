import Image from "next/image";
import Link from "next/link";
import { reports } from "@/data/midiaData";
import t1 from "../../../public/assets/img/placeholders/photo-2.jpg";
import t2 from "../../../public/assets/img/placeholders/photo-3.jpg";
import t3 from "../../../public/assets/img/placeholders/photo-4.jpg";
import t4 from "../../../public/assets/img/placeholders/photo-5.jpg";
import t5 from "../../../public/assets/img/placeholders/photo-6.jpg";
import t6 from "../../../public/assets/img/placeholders/photo-7.jpg";

const thumbs = [t1, t2, t3, t4, t5, t6];

const MidiaReports = () => {
    return (
        <section className="pt-midia-section pt-midia-section--alt" aria-labelledby="reports-title">
            <div className="container">
                <div className="pt-midia-section__head tp_fade_anim">
                    <span className="pt-overline">Reportagens e matérias</span>
                    <h2 id="reports-title">
                        <em>Imprensa</em> que cobre a pauta.
                    </h2>
                    <p>
                        Recortes da cobertura da imprensa brasileira sobre o trabalho de
                        Patrícia, suas pautas e o impacto das iniciativas.
                    </p>
                </div>

                <div className="pt-reports-grid">
                    {reports.map((r, i) => (
                        <Link
                            key={r.title + i}
                            href={r.href}
                            className="pt-report-card tp_fade_anim"
                            data-delay={`.${(i % 3) * 10 + 15}`}
                        >
                            <div className="pt-report-card__thumb">
                                <Image
                                    src={thumbs[i % thumbs.length]}
                                    alt=""
                                    placeholder="blur"
                                    sizes="(max-width: 991px) 50vw, 33vw"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    width={400}
                                    height={250}
                                />
                            </div>
                            <div className="pt-report-card__body">
                                <div className="pt-report-card__meta">
                                    <span className="outlet">{r.outlet}</span>
                                    <span className="date">{r.date}</span>
                                </div>
                                <h3 className="pt-report-card__title">{r.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MidiaReports;
