import { useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import { Button } from '~/lib/components/ui/button'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'
import { Textarea } from '~/lib/components/ui/textarea'

export default function Create() {
  const { data, setData, post } = useForm({
    name: '',
    couleurs: '',
    puce: '',
    tatouage: '',
    sexe: '',
    lof: '',
    cotation: '',
    adn: '',
    tares: '',
    reproduction: '',
    description: '',
    thumbnail: null,
    reserved: '',
    vendu: '',
    prix: '',
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/create')
  }

  return (
    <>
      <section className="mt-32">
        <form
          action="/create"
          method="post"
          className="flex flex-col gap-8"
          noValidate={true}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="couleurs">Couleurs</Label>
              <Input
                type="text"
                name="couleurs"
                id="couleurs"
                value={data.couleurs}
                onChange={(e) => setData('couleurs', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Label htmlFor="puce">Puce</Label>
              <Input
                type="text"
                name="puce"
                id="puce"
                value={data.puce}
                onChange={(e) => setData('puce', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="tatouage">Tatouage</Label>
              <Input
                type="text"
                name="tatouage"
                id="tatouage"
                value={data.tatouage}
                onChange={(e) => setData('tatouage', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Label htmlFor="sexe">Sexe</Label>
              <Input
                type="text"
                name="sexe"
                id="sexe"
                value={data.sexe}
                onChange={(e) => setData('sexe', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="lof">Lof</Label>
              <Input
                type="text"
                name="lof"
                id="lof"
                value={data.lof}
                onChange={(e) => setData('lof', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Label htmlFor="cotation">Cotation</Label>
              <Input
                type="text"
                name="cotation"
                id="cotation"
                value={data.cotation}
                onChange={(e) => setData('cotation', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="adn">ADN</Label>
              <Input
                type="text"
                name="adn"
                id="adn"
                value={data.adn}
                onChange={(e) => setData('adn', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Label htmlFor="tares">Tares</Label>
              <Input
                type="text"
                name="tares"
                id="tares"
                value={data.tares}
                onChange={(e) => setData('tares', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="reproduction">Reproduction</Label>
              <Input
                type="text"
                name="reproduction"
                id="reproduction"
                value={data.reproduction}
                onChange={(e) => setData('reproduction', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Label htmlFor="reserved">Reserver</Label>
              <Input
                type="text"
                name="reserved"
                id="reserved"
                value={data.reserved}
                onChange={(e) => setData('reserved', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="vendu">Vendu</Label>
              <Input
                type="text"
                name="vendu"
                id="vendu"
                value={data.vendu}
                onChange={(e) => setData('vendu', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="prix">Prix</Label>
              <Input
                type="text"
                name="prix"
                id="prix"
                value={data.prix}
                onChange={(e) => setData('prix', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                id="description"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Input type="file" onChange={(e) => setData('thumbnail', e.target.files[0])} />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </>
  )
}
