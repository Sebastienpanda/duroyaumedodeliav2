import type { Metadata } from "next";
import { Dancing_Script, Karma } from "next/font/google";
import "./globals.css";

const pt_serif = Dancing_Script({
    subsets: ["latin"],
    variable: "--ptSerif",
    weight: "700",
    display: "swap",
    preload: true,
});
const montSerrat = Karma({
    subsets: ["latin"],
    variable: "--montserrat",
    weight: ["400", "700"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "Elevage Du Royaume D'Odelia - eleveur de chiens Chihuahua",
    description:
        "Elevage Du Royaume D'Odelia, chiens de race Chihuahua, chiens, chien, chiots, chiot, localisation géographique: 27260 Chapelle Bayvel",
    keywords:
        "Elevage Du Royaume D'Odelia, éleveur de Chihuahua, elevage, elevages, eleveur, eleveurs, eleveuse, eleveuses,amateur, amateurs, professionnel, professionnels, siret, affixe, affixes, afixe, afixes,race, race, canin, canins, canine, canines,  chenil, chenils, chien, chiens, chienne, chiennes, gestation, gestante, pedigree, pedigrees, pedigre, pedigres,  scc, associations, adresse, adresses, sites, site, petites annonces, petit annonce, vente, achat, saillie, donne, recherche, ventes, saillies, vend, vends, portees, portee, porte, portes, maile, femelle, males, femelles, coordonnées, coordonnee, livre des origines reconnues, airedale terrier, akita inu, Malamute d'alaska, anglo-français de petite vénerie, basset hound, beagle, berger allemand, Berger australien shepherd, berger de beauce, Labrit, Sheltie, Berger hollandais à poil court, Bichon à poil frisé, bichon havanais, bichon maltais,",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            style={{ scrollBehavior: "smooth" }}
            className={`scroll-smooth ${pt_serif.variable} ${montSerrat.variable}`}
        >
            <body className="relative" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
