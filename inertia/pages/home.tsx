import { Head } from '@inertiajs/react'
import Footer from '~/components/layout/footer'
import Header from '~/components/layout/header'
import Presentation from '~/components/layout/presentation'
import All from './chiens/all'
import BannerAnim from '~/components/layout/bannerAnim'
import Mariage from '~/components/layout/mariage'
import LoaderLotus from '~/components/loader/loaderLotus'

export default function Home() {
  return (
    <>
      <Head>
        <title>Du Royaume D'Odelia</title>
        <meta
          name="description"
          content="Elevage Du Royaume D'Odelia, chiens de race Chihuahua, chiens, chien, chiots, chiot, localisation géographique: 27260 Chapelle Bayvel"
        />
      </Head>
      <Header activate={true} />
      <main className="container">
        <Presentation />
        <All />
        <BannerAnim />
        <Mariage />
      </main>
      <Footer />
      <LoaderLotus />
    </>
  )
}
